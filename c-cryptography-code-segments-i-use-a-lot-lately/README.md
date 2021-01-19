<img class="alignnone size-full wp-image-1099" src="https://icompile.eladkarako.com/_uploads/2014/05/crypto1.jpg" alt="crypto1" width="423" height="241" />

<pre>
static void blkcpy(void *, void *, size_t);
</pre>
<pre>static void
blkcpy(void * dest, void * src, size_t len)
{
	size_t * D = dest;
	size_t * S = src;
	size_t L = len / sizeof(size_t);
	size_t i;

	for (i = 0; i &lt; L; i++)
		D[i] = S[i];
}
</pre>
<pre>static void blkxor(void *, void *, size_t);
</pre>
<pre>static void
blkxor(void * dest, void * src, size_t len)
{
	size_t * D = dest;
	size_t * S = src;
	size_t L = len / sizeof(size_t);
	size_t i;

	for (i = 0; i &lt; L; i++)
		D[i] ^= S[i];
}
</pre>
<pre>static void salsa20_8(uint32_t[16]);
</pre>
<pre>/**
 * salsa20_8(B):
 * Apply the salsa20/8 core to the provided block.
 */
static void
salsa20_8(uint32_t B[16])
{
	uint32_t x[16];
	size_t i;

	blkcpy(x, B, 64);
	for (i = 0; i &lt; 8; i += 2) {
#define R(a,b) (((a) &lt;&lt; (b)) | ((a) &gt;&gt; (32 - (b))))
		/* Operate on columns. */
		x[ 4] ^= R(x[ 0]+x[12], 7);  x[ 8] ^= R(x[ 4]+x[ 0], 9);
		x[12] ^= R(x[ 8]+x[ 4],13);  x[ 0] ^= R(x[12]+x[ 8],18);

		x[ 9] ^= R(x[ 5]+x[ 1], 7);  x[13] ^= R(x[ 9]+x[ 5], 9);
		x[ 1] ^= R(x[13]+x[ 9],13);  x[ 5] ^= R(x[ 1]+x[13],18);

		x[14] ^= R(x[10]+x[ 6], 7);  x[ 2] ^= R(x[14]+x[10], 9);
		x[ 6] ^= R(x[ 2]+x[14],13);  x[10] ^= R(x[ 6]+x[ 2],18);

		x[ 3] ^= R(x[15]+x[11], 7);  x[ 7] ^= R(x[ 3]+x[15], 9);
		x[11] ^= R(x[ 7]+x[ 3],13);  x[15] ^= R(x[11]+x[ 7],18);

		/* Operate on rows. */
		x[ 1] ^= R(x[ 0]+x[ 3], 7);  x[ 2] ^= R(x[ 1]+x[ 0], 9);
		x[ 3] ^= R(x[ 2]+x[ 1],13);  x[ 0] ^= R(x[ 3]+x[ 2],18);

		x[ 6] ^= R(x[ 5]+x[ 4], 7);  x[ 7] ^= R(x[ 6]+x[ 5], 9);
		x[ 4] ^= R(x[ 7]+x[ 6],13);  x[ 5] ^= R(x[ 4]+x[ 7],18);

		x[11] ^= R(x[10]+x[ 9], 7);  x[ 8] ^= R(x[11]+x[10], 9);
		x[ 9] ^= R(x[ 8]+x[11],13);  x[10] ^= R(x[ 9]+x[ 8],18);

		x[12] ^= R(x[15]+x[14], 7);  x[13] ^= R(x[12]+x[15], 9);
		x[14] ^= R(x[13]+x[12],13);  x[15] ^= R(x[14]+x[13],18);
#undef R
	}
	for (i = 0; i &lt; 16; i++)
		B[i] += x[i];
}
</pre>
<pre>static void blockmix_salsa8(uint32_t *, uint32_t *, uint32_t *, size_t);
</pre>
<pre>/**
 * blockmix_salsa8(Bin, Bout, X, r):
 * Compute Bout = BlockMix_{salsa20/8, r}(Bin).  The input Bin must be 128r
 * bytes in length; the output Bout must also be the same size.  The
 * temporary space X must be 64 bytes.
 */
static void
blockmix_salsa8(uint32_t * Bin, uint32_t * Bout, uint32_t * X, size_t r)
{
	size_t i;

	/* 1: X</pre>
<pre>static uint64_t integerify(void *, size_t);
</pre>
<pre>/**
 * integerify(B, r):
 * Return the result of parsing B_{2r-1} as a little-endian integer.
 */
static uint64_t
integerify(void * B, size_t r)
{
	uint32_t * X = (void *)((uintptr_t)(B) + (2 * r - 1) * 64);

	return (((uint64_t)(X[1]) &lt;&lt; 32) + X[0]);
}
</pre>
<pre>static void smix(uint8_t *, size_t, uint64_t, uint32_t *, uint32_t *);
</pre>
<pre>/**
 * smix(B, r, N, V, XY):
 * Compute B = SMix_r(B, N).  The input B must be 128r bytes in length;
 * the temporary storage V must be 128rN bytes in length; the temporary
 * storage XY must be 256r + 64 bytes in length.  The value N must be a
 * power of 2 greater than 1.  The arrays B, V, and XY must be aligned to a
 * multiple of 64 bytes.
 */
static void
smix(uint8_t * B, size_t r, uint64_t N, uint32_t * V, uint32_t * XY)
{
	uint32_t * X = XY;
	uint32_t * Y = &amp;XY[32 * r];
	uint32_t * Z = &amp;XY[64 * r];
	uint64_t i;
	uint64_t j;
	size_t k;

	/* 1: X</pre>
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
<pre>/**
 * crypto_scrypt(passwd, passwdlen, salt, saltlen, N, r, p, buf, buflen):
 * Compute scrypt(passwd[0 .. passwdlen - 1], salt[0 .. saltlen - 1], N, r,
 * p, buflen) and write the result into buf.  The parameters r, p, and buflen
 * must satisfy r * p &lt; 2^30 and buflen &lt;= (2^32 - 1) * 32.  The parameter N  * must be a power of 2 greater than 1.  *  * Return 0 on success; or -1 on error.  */ int crypto_scrypt(const uint8_t * passwd, size_t passwdlen,     const uint8_t * salt, size_t saltlen, uint64_t N, uint32_t r, uint32_t p,     uint8_t * buf, size_t buflen) { 	void * B0, * V0, * XY0; 	uint8_t * B; 	uint32_t * V; 	uint32_t * XY; 	uint32_t i; 	/* Sanity-check parameters. */ #if SIZE_MAX &gt; UINT32_MAX
	if (buflen &gt; (((uint64_t)(1) &lt;&lt; 32) - 1) * 32) { 		errno = EFBIG; 		goto err0; 	} #endif 	if ((uint64_t)(r) * (uint64_t)(p) &gt;= (1 &lt;&lt; 30)) { 		errno = EFBIG; 		goto err0; 	} 	if (((N &amp; (N - 1)) != 0) || (N == 0)) { 		errno = EINVAL; 		goto err0; 	} 	if ((r &gt; SIZE_MAX / 128 / p) ||
#if SIZE_MAX / 256 &lt;= UINT32_MAX 	    (r &gt; SIZE_MAX / 256) ||
#endif
	    (N &gt; SIZE_MAX / 128 / r)) {
		errno = ENOMEM;
		goto err0;
	}

	/* Allocate memory. */
#ifdef HAVE_POSIX_MEMALIGN
	if ((errno = posix_memalign(&amp;B0, 64, 128 * r * p)) != 0)
		goto err0;
	B = (uint8_t *)(B0);
	if ((errno = posix_memalign(&amp;XY0, 64, 256 * r + 64)) != 0)
		goto err1;
	XY = (uint32_t *)(XY0);
#ifndef MAP_ANON
	if ((errno = posix_memalign(&amp;V0, 64, 128 * r * N)) != 0)
		goto err2;
	V = (uint32_t *)(V0);
#endif
#else
	if ((B0 = malloc(128 * r * p + 63)) == NULL)
		goto err0;
	B = (uint8_t *)(((uintptr_t)(B0) + 63) &amp; ~ (uintptr_t)(63));
	if ((XY0 = malloc(256 * r + 64 + 63)) == NULL)
		goto err1;
	XY = (uint32_t *)(((uintptr_t)(XY0) + 63) &amp; ~ (uintptr_t)(63));
#ifndef MAP_ANON
	if ((V0 = malloc(128 * r * N + 63)) == NULL)
		goto err2;
	V = (uint32_t *)(((uintptr_t)(V0) + 63) &amp; ~ (uintptr_t)(63));
#endif
#endif
#ifdef MAP_ANON
	if ((V0 = mmap(NULL, 128 * r * N, PROT_READ | PROT_WRITE,
#ifdef MAP_NOCORE
	    MAP_ANON | MAP_PRIVATE | MAP_NOCORE,
#else
	    MAP_ANON | MAP_PRIVATE,
#endif
	    -1, 0)) == MAP_FAILED)
		goto err2;
	V = (uint32_t *)(V0);
#endif

	/* 1: (B_0 ... B_{p-1}) 
</pre>


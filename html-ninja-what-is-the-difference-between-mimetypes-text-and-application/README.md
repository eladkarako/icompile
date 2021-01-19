You better use <code>application/...</code> and NOT <code>text/...</code>.

Why?
well...
<!--more-->
<blockquote>Internet media types are registered with a canonical form. An entity-body transferred via HTTP messages MUST be represented in the appropriate canonical form prior to its transmission except for "text" types, as defined in the next paragraph.

When in canonical form, media subtypes of the "text" type use <code>CRLF</code> as the text line break. HTTP relaxes this requirement and allows the transport of text media with plain <code>CR</code> or <code>LF</code> alone representing a line break when it is done consistently for an entire entity-body. HTTP applications MUST accept <code>CRLF</code>, bare <code>CR</code>, and bare <code>LF</code> as being representative of a line break in text media received via HTTP. In addition, if the text is represented in a character set that does not use octets <code>13</code> and <code>10</code> for <code>CR</code> and <code>LF</code> respectively, as is the case for some multi-byte character sets, HTTP allows the use of whatever octet sequences are defined by that character set to represent the equivalent of <code>CR</code> and <code>LF</code> for line breaks. This flexibility regarding line breaks applies only to text media in the entity-body; a bare <code>CR</code> or <code>LF</code> MUST NOT be substituted for <code>CRLF</code> within any of the HTTP control structures (such as header fields and multipart boundaries).
</blockquote>

<blockquote>If an entity-body is encoded with a content-coding, the underlying data MUST be in a form defined above prior to being encoded.</blockquote>

The "charset" parameter is used with some media types to define the character set (section 3.4) of the data. When no explicit charset parameter is provided by the sender, media subtypes of the "text" type are defined to have a default charset value of "ISO-8859-1" when received via HTTP. Data in character sets other than "ISO-8859-1" or its subsets MUST be labeled with an appropriate charset value.
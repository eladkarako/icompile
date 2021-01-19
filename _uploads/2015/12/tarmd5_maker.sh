#!/bin/bash

while [[ $# > 0 ]]; do
  filename="$1"
  
  if [[ ! -f $filename ]]; then
    echo "$filename is not a file"
    shift # past argument
    continue;
  fi
  
  
  tar -H ustar -c $filename >$filename.tar
  md5sum -t $filename.tar >>$filename.tar
  mv $filename.tar $filename.tar.md5

  if [[ -f $filename.tar.md5 ]]; then
    echo "$filename.tar.md5 write success"
  fi

  shift # past argument
done

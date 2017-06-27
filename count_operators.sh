#!/bin/bash

# Optimized for react/jsx/es6!
SCSPEC='static'
TYPE_QUAL='const|let'
RESERVED='if |else|import |break|case|class |continue|default|do|for |new\(|return|sizeof|switch |while |this|try|catch|throw|throws|finally|instanceof|extends |true|false'
OPERATOR="\!|\!=|%|%=|&|&&|&=|\|\||\(|\[|\*|;|{|\[|\*|\*=|\+|\+\+|\+=|,| -|--|-=|=>|[^']\.+|[^'].+/|/=|:|<|<=|=|==|>|>=|\?|\||=&"
COMMENTS='^ *//|^ */\*\*|^ *\*|^ *<\!--'
FUNCS='function |[a-z]+\(.+\) \{'
SPECIALS='import'

PATTERN="$SCSPEC|$TYPE_QUAL|$RESERVED|$OPERATOR"
EXCEPTIONS="$COMMENTS|$FUNCS"

echo "File $1"
#cho "using ack:"
#echo "=========="
#ack "$PATTERN" $1
#ack -c "$PATTERN" $1
echo "no filtering:"
echo "============="
egrep -o "$PATTERN" $1 | sort -n | uniq -c
echo -n "Total operators (unfiltered): "
egrep -o "$PATTERN" $1 | sort -n | uniq -c | awk '{print $1}' | paste -sd+ | bc
echo
echo "with filtering:"
echo "==============="
egrep -v "$EXCEPTIONS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c
echo -n "Total operators N1: "
egrep -v "$EXCEPTIONS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c | awk '{print $1}' | paste -sd+ | bc
echo
echo "exceptions filter:"
echo "=================="
egrep -o "$EXCEPTIONS" $1 | sort -n | uniq -c
echo
echo "grep COMMENTS:"
echo "=============="
egrep "$COMMENTS" $1
echo
echo "grep FUNCS:"
echo "==========="
egrep "$FUNCS" $1
echo
echo "grep SPECIALS:"
echo "=============="
egrep "$SPECIALS" $1
echo
echo "grep EXCEPTIONS:"
echo "================"
egrep "$EXCEPTIONS" $1
echo

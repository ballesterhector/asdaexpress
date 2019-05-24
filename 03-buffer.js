/*
    Es una tira de bytes (datos binarios) similar a un array de enteros
    los buffer son los arreglos del backen
    tamaño fijo
    Manipular datos directamente 
        Sockest
        Streams
        Implementar protocolos complejos
        Manipulación de ficheros/imágenes
        Criptografia

    The character encodings currently supported by Node.js include:

'ascii' - For 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.

'utf8' - Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.

'utf16le' - 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.

'ucs2' - Alias of 'utf16le'.

'base64' - Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC 4648, Section 5.

'latin1' - A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC 1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).

'binary' - Alias for 'latin1'.

'hex' - Encode each byte as two hexadecimal characters.

    
*/
'use strict'
//por ser igual a un arreglo debe separar con ,
//100 o 26 son posicion es
var buf1 = new Buffer.allocUnsafe(10),
    buf2 = new Buffer.allocUnsafe(26),
    //cadena de texto
    str = '\u00bd + \u00bc = \u00be'

    buf1.write('abcd', 0, 4, 'ascii')

    console.log(
        buf1,
        buf1.toString('ascii'), //convertir buf1 en texto toString
        str,
        str.length,
        Buffer.byteLength(str, 'utf8')
    )

    //imprimir el abecedario de 26 letras
    for(var i = 0; i < buf2.length; i ++){
        //en ascii 97 = a
        buf2[i] = i + 97
    }    

    console.log(buf2.toString('ascii'))

    // Creates a zero-filled Buffer of length 10. 
    const buf3 = Buffer.alloc(10)
    console.log(buf3)

    // Creates a Buffer of length 10, filled with 0x1.
    const buf4 = Buffer.alloc(10, 2)
    console.log(buf4)

    // Creates an uninitialized buffer of length 10.
    // This is faster than calling Buffer.alloc() but the returned
    // Buffer instance might contain old data that needs to be
    // overwritten using either fill() or write().
    const buf5 = Buffer.allocUnsafe(4);
    console.log(buf5)

    // Creates a Buffer containing [0x1, 0x2, 0x3].
    const buf6 = Buffer.from([1, 2, 3])
    console.log(buf6)

    // Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
    const buf7 = Buffer.from('tést')
    console.log(buf7)

    // Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
    const buf8 = Buffer.from('tést', 'latin1')
    console.log(buf8)

    //con json
    const buf9 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
    const json = JSON.stringify(buf9);

    console.log(json);
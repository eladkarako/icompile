  //return a ready to use string of css style, suitable for either firefox or chrome
    getPerBrowserStyle: function(sBaseStyle, sBase64Image){
    
        var customStyle = sBaseStyle;

        if( this.isChrome() )
            customStyle += 'content:url(' + sBase64Image + ')';
        else
            customStyle += 'background-image:url(' + sBase64Image + ');';

        return(customStyle);
    },
', 'solve the background-image isn't shown in chrome
if (Meteor.isClient) {
    

    var media_player_playables = {"identifier":"adswizz_mpr_news",
        "title":"MPR News",
        "description":"live stream",
        "flash_server_url":"rtmp://archivemedia.publicradio.org/news/",
        "flash_file_path":"news.stream",
        "http_file_path":"http://nis.stream.publicradio.org/nis.mp3",
        "buffer_time":6,
        "type":"live_audio"};


        /*
        This is a hacked version of the media player init.
        It deals with the fact that for the moment there isn't a cross-domain way to get the OAS / JSON info from 
        http://minnesota.publicradio.org/tools/oas_shim/index.php?name=minnesota.publicradio.org/media_player_current_live@x81

        Instead, we've hard-coded a data response in and are just going to work with that for development. 
        */

        
        Session.set('jQueryUI',false);
        Session.set('soundManager2',false);
        Session.set('APMPlayer',false);


        Meteor.startup(function(){
            console.log('startup');
            jQuery.getScript('http://common.publicradio.org/media_player/1.2.2/script/lib/jquery-ui-slider.custom.min.js', function(data, textStatus, jqxhr){
                Session.set('jQueryUI',true);
            });
            jQuery.getScript('http://common.publicradio.org/media_player/1.2.2/script/lib/soundmanager2-jsmin.js', function(response){
                Session.set('soundManager2',true);
            });
            Session.whenTrue(['jQueryUI','soundManager2'], function(){
                console.log('jquery ui and sm2 loaded')
                jQuery.getScript('http://common.publicradio.org/media_player/1.2.2/script/apmplayer-all.min.js', function(response){
                    Session.set('APMPlayer',true);
                    console.log('loaded apmplayer');
                });
            }); 
            Session.whenTrue(['jQueryUI','soundManager2','APMPlayer'],function(){
                // run the facebook initialization code now that we're sure all the dependencies are there...
                console.log('all apmplayer assets should be available. firing!');
                console.log(media_player_playables);
                soundManager.setup({ url: 'http://common.publicradio.org/media_player/1.2.2/script/lib/swf/' });
                soundManager.beginDelayedInit();
                jQuery('#apm_media_wrapper').apmplayer_ui({
                    settings : {
                          autoplay : false
                    },
                    playables : [media_player_playables],
                    onMetadata : function (playable) {   //callback that can be removed or re-implemented for each different player.
                        console.log('playable',playable);
                        var snippet = "";
                        if (playable.program !== '') {
                            snippet += "<h2>"+playable.program+"</h2>";
                        }
                        if (playable.title !== '' && playable.title.indexOf("null - American Public Media") === -1 && playable.title !== 'AWBreak') {
                            snippet += "<p>"+playable.title+"</p>";
                        }
                        jQuery('#apm_player_info').html(snippet);
                    }   
                });
        
            }); //end Session.whenTrue


        });

       


}

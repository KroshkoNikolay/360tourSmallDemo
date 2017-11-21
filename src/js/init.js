(function(){
    pannellum.viewer('panorama', {
        "default": {
            "firstScene": "livingRoom",
            "sceneFadeDuration": 1000
        },

        "scenes": {
            "livingRoom": {
                "autoLoad": true,
                "autoRotate": -2,
                "hfov": 110,
                "pitch": -3,
                "yaw": 330,
                "type": "equirectangular",
                "panorama": "img/img1_small.jpg",
                "hotSpots": [
                    {
                        "pitch": -2.1,
                        "yaw": 288,
                        "type": "scene",
                        "text": "See the bedroom",
                        "sceneId": "bedRoom"
                    },
                    {
                        "pitch": -5.0,
                        "yaw": 30.5,
                        "type": "info",
                        "text": "TV",
                    },
                    {
                        "pitch": -10.4,
                        "yaw": 222.6,
                        "type": "info",
                        "text": "Kitchen table"
                    },
                ]
            },

            "bedRoom": {
                "autoLoad": true,
                "autoRotate": -2,
                "hfov": 110,
                "yaw": 5,
                "type": "equirectangular",
                "panorama": "img/img2_small.jpg",
                "hotSpots": [
                    {
                        "pitch": -0.6,
                        "yaw": 320,
                        "type": "scene",
                        "text": "See the living room",
                        "sceneId": "livingRoom",
                    },
                    {
                        "pitch": -0.9,
                        "yaw": 144.4,
                        "type": "info",
                        "text": "Great garden outside"
                    }
                ]
            }
        }
    });

})();
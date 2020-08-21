
AFRAME.registerComponent('video', {
            init: function() {
                this.el.addEventListener('loaded', element => {
                    document.querySelector('a-assets').fileLoader.load(
                        element.target.getAttribute('src'),
                        function ( data ) {
                            let miStorage = window.localStorage;
                            let isPageLoaded = !!miStorage.getItem('isPageLoaded');
                            if(!isPageLoaded) {
                                location.reload();
                                miStorage.setItem('isPageLoaded', 'true');
                            }else {
                                miStorage.clear();
                                let loadingElement = document.getElementById('loading');
                                loadingElement.style.visibility = 'hidden';
                                loadingElement.style.opacity = 0;
                            }
                        },
                    );

                })
            },
});






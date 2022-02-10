ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.760363, 37.621166],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects               
        .add(new ymaps.Placemark([55.760363, 37.621166], {
            balloonContent: '',
            iconCaption: ''
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }));
}
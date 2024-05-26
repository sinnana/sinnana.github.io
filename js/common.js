window.basic = {
    "title": "박석범 ♥ 장세희 결혼합니다.",
    "groom": {
        "name" : "박석범",
        "phone" : "01000000000",
    },
    "bride": {
        "name": "장세희",
        "phone": "01000000000",
    },
    "date": {
        "year" : "2024",
        "month" : "09",
        "day" : "28",
        "hour" : "12",
        "minute" : "40",
    },
    "location": {
        "name" : "루이비스 대전",
        "address" : "대전광역시 유성구 테크노중앙로 161 호텔 스카이파크 1층",
        "x" : "36.4246584",
        "y" : "127.3979372"
    },
    "link": "https://saybeom.github.io/",
    "kakao": {
        "description": "2024.09.28. 토요일 오후 12:40\n대전 루이비스 그레이스홀",
        "button" : "모바일 청첩장 보기"
    },
    "info": {

    }
}
let scrollTop;
const holidays = [16,17,18];
const numOfImages = 46;
const basicNumbers = 9;
const excludeNumbers = [22,31,46];
$(document).ready(function (){

    new WOW().init();

    $('.popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        callbacks: {
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
        }
    });

    setGallery('gallery-html');

    let msnry = $('#grid-container').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter : 20,
        transitionDuration: 0
    });

    imagesLoaded( '#grid-container' ).on( 'progress', function() {
        $('#grid-container').masonry('layout');
    });

    $('.grid-item').magnificPopup({
        fixedContentPos: true,
        delegate: 'img',
        type:'image',
        gallery: {
            enabled: true
        },
        callbacks: {
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
            elementParse: function(qw) {
                qw.src = qw.el.attr('src');
            }
        }
    });

    $('#map-popup').magnificPopup({
        items: [
            {
                src: './img/map/map1.jpg'
            },
            {
                src: './img/map/map2.jpg'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image',
        callbacks: {
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
        }
    });

    drawCalendar(window.basic.date);
    loadCountdown(window.basic.date);

    getKakaoMap(window.basic.location);

});

function drawCalendar(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const year = parseInt(date.year);
    const month = parseInt(date.month);
    const day = parseInt(date.day);

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    const calendarContainer = document.getElementById("calendar");

    let calendarHTML = `
    <div class="mb-2">${monthNames[month - 1]} ${year}</div>
    <div class="week">
        ${["일", "월", "화", "수", "목", "금", "토"].map((day, index) => `<div class="${'day'}">${day}</div>`).join('')}
    </div>`;

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        let line = "";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                line += "<div class='empty'></div>";
            } else if (dayCount > daysInMonth) {
                break;
            } else {
                let dateClass = "";
                if (holidays.includes(dayCount)) {
                    dateClass = "holiday";
                }
                if (dayCount === day) {
                    dateClass = "highlight";
                }
                line += `<div class='day ${dateClass}'>${dayCount}</div>`;
                dayCount++;
            }
        }
        calendarHTML += "<div class='week'>" + line + "</div>";
        if (dayCount > daysInMonth) {
            break;
        }
    }

    calendarContainer.innerHTML = calendarHTML;
}

function loadCountdown(date){

    const wTime = new Date(date.year,parseInt(date.month)-1,date.day,date.hour, date.minute);
    const wDay = new Date(date.year,parseInt(date.month)-1,parseInt(date.day)+1,date.hour, date.minute);

    $('#date-countdown').countdown({ until: wTime, timezone: +9 });//format: 'dHMS', compact: true,
    $('#dday-countdown').countdown({ until: wDay, format: 'dHMS', compact: true, layout: '{dn}', timezone: +9 });

}

function getKakaoMap(location){
    const container = document.getElementById('map');

    const xy = new kakao.maps.LatLng(location.x, location.y);
    let options = {
        center: xy,
        level: 5
    };

    let map = new kakao.maps.Map(container, options);

    let marker = new kakao.maps.Marker({
        position: xy,
        map: map
    });

    marker.setPosition(xy);
}
function morePhoto(){
    $('#grid-container .hidden-photo').removeClass('visually-hidden');
    imagesLoaded( '#grid-container' ).on( 'progress', function() {
        $('#grid-container').masonry('layout');
    });
    $('#more-photo').addClass('visually-hidden');
    $('#hide-photo').removeClass('visually-hidden');

    // 스크롤 위치 저장
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
}
function hidePhoto(){
    $('#grid-container .hidden-photo').addClass('visually-hidden');
    imagesLoaded( '#grid-container' ).on( 'progress', function() {
        $('#grid-container').masonry('layout');
    });
    $('#more-photo').removeClass('visually-hidden');
    $('#hide-photo').addClass('visually-hidden');

    window.scrollTo(0, scrollTop);
}
function setGallery(id){

    let parentElement = document.getElementById(id);

    let randomImageNumbers = [];
    randomImageNumbers = Array.from({length: numOfImages}, (_, index) => index + 1);
    //랜덤 이미지 번호 배열 생성
    // while (randomImageNumbers.length < numOfImages) {
    //     let randomNum = Math.floor(Math.random() * numOfImages) + 1;
    //     if (!randomImageNumbers.includes(randomNum)) {
    //         randomImageNumbers.push(randomNum);
    //     }
    // }

    let cnt = 0;
    randomImageNumbers.forEach(function(imageNumber) {

        let divElement = document.createElement('div');
        cnt++;
        if(cnt <= basicNumbers){
            divElement.className = 'grid-item';
        }else{
            divElement.className = 'grid-item hidden-photo visually-hidden';
        }

        let imgElement = document.createElement('img');
        imgElement.src = './img/gallery/' + imageNumber + '.jpg';

        divElement.appendChild(imgElement);

        parentElement.appendChild(divElement);
    });
}
function kakaoShare() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: window.basic.title,
            description: window.basic.kakao.description,
            imageUrl: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbK2zzcOP5lrATByauGY2XzaFwN8UxLTDtBML0IQrjp0Wndrn53h-RDLdyjov2ADAcj3gdGAXKf3QyfsqUYYy9d3HbYmd3jK0A=w2778-h2142-rw-v1",
            imageHeight: 550,
            link: {
                mobileWebUrl: window.basic.link,
                webUrl: window.basic.link,
            },
        },
        buttons: [
            {
                title: window.basic.kakao.button,
                link: {
                    mobileWebUrl: window.basic.link,
                    webUrl: window.basic.link,
                },
            },
        ],
    });
}
function startNavigation() {
    //https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord
    Kakao.Navi.start({
        name: window.basic.location.name,
        x: window.basic.location.x,
        y: window.basic.location.x,
        coordType: 'wgs84',
    });
}
function copyLink(){

    let url = window.document.location.href;
    copyToClipboard(url);
    alert('청첩장 주소가 복사되었습니다.');
}

function copyAccount(val){
    copyToClipboard(val);
    alert('계좌번호가 복사되었습니다.');
}

function copyToClipboard(val) {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
window.basic = {
    "title": "박석범 ♥ 장세희 결혼합니다!",
    "groom": {
        "name": "박석범",
        "first_name": "석범",
        "phone": "01012341234",
        "account": "기업 00",
        "parents": {
            "father": {
                "name": "박영조",
                "phone": "01000000000",
                "account": "기업"
            },
            "mother": {
                "name": "오계자",
                "phone": "01000000000",
                "account": "기업"
            }
        }
    },
    "bride": {
        "name": "장세희",
        "first_name": "세희",
        "phone": "01000000000",
        "account": "신한 110-000-000000",
        "parents": {
            "father": {
                "name": "장우진",
                "phone": "01000000000",
                "account": "국민"
            },
            "mother": {
                "name": "최연희",
                "phone": "01000000000",
                "account": "신한"
            }
        }
    },
    "date": {
        "year": "2024",
        "month": "09",
        "day": "28",
        "hour": "12",
        "minute": "40"
    },
    "location": {
        "name": "루이비스 대전",
        "address": "대전광역시 유성구 테크노중앙로 161 호텔 스카이파크 1층",
        "x": "36.4246584",
        "y": "127.3979372"
    },
    "link": "https://saybeom.github.io/",
    "kakao": {
        "description": "2024.09.28. 토요일 오후 12:40\n대전 루이비스 그레이스홀",
        "button": "모바일 청첩장 보기"
    },
    "info": {
        "description":"2024.09.28.(토) 오후 12:40 루이비스 그레이스홀",
        "greeting": "아주 작은 인연이 저희를 연인으로 만들었고\n오늘 그 인연으로 저희가 하나가 됩니다.\n작은 사랑으로 하나의 커다란 열매를 맺고\n이제 또 다른 모습으로 사랑하고자 하는 두 사람을\n오셔서 지켜봐 주시고 축하해 주십시오.\n늘 그 인연을 생각하며 살겠습니다.",
        "wedding_date": "2024.09.28 토요일 오후 12:40",
        "wedding_location": "대전 루이비스컨벤션 그레이스홀",
        "wedding_address": "대전 유성구 테크노중앙로 161 ( 용산동 579 )<br>스카이파크호텔 1층"
    }
}
let scrollTop;
const holidays = [16,17,18];
const numOfImages = 46;
const basicNumbers = 9;
const excludeNumbers = [22,31,46];

function setText(){

    document.getElementById("ogTitle").setAttribute("content", window.basic.title);
    document.getElementById("ogDescription").setAttribute("content", window.basic.info.wedding_date);
    document.getElementById("ogURL").setAttribute("content", window.basic.link);

    $('#txt-title').html(window.basic.title);
    $('.txt-groom').html(window.basic.groom.name);
    $('.txt-groom-first').html(window.basic.groom.first_name);
    $('.txt-groom-father').html(window.basic.groom.parents.father.name);
    $('.txt-groom-mother').html(window.basic.groom.parents.mother.name);
    $('.txt-bride').html(window.basic.bride.name);
    $('.txt-bride-first').html(window.basic.bride.first_name);
    $('.txt-bride-father').html(window.basic.bride.parents.father.name);
    $('.txt-bride-mother').html(window.basic.bride.parents.mother.name);
    $('#txt-greeting').html(window.basic.info.greeting);
    $('.txt-date').html(window.basic.info.wedding_date);
    $('.txt-location').html(window.basic.info.wedding_location);
    $('#txt-address').html(window.basic.info.wedding_address);

    $('.txt-groom-account').html(window.basic.groom.account);
    $('.txt-groom-father-account').html(window.basic.groom.parents.father.account);
    $('.txt-groom-mother-account').html(window.basic.groom.parents.mother.account);
    $('.txt-bride-account').html(window.basic.bride.account);
    $('.txt-bride-father-account').html(window.basic.bride.parents.father.account);
    $('.txt-bride-mother-account').html(window.basic.bride.parents.mother.account);

    let groom_tel = document.getElementById("groom-tel");
    groom_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.phone;
    };
    let groom_sms = document.getElementById("groom-sms");
    groom_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.phone;
    };

    let groom_father_tel = document.getElementById("groom-father-tel");
    groom_father_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.father.phone;
    };

    let groom_father_sms = document.getElementById("groom-father-sms");
    groom_father_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.father.phone;
    };

    let groom_mother_tel = document.getElementById("groom-mother-tel");
    groom_mother_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.father.phone;
    };

    let groom_mother_sms = document.getElementById("groom-mother-sms");
    groom_mother_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.father.phone;
    };

    let bride_tel = document.getElementById("bride-tel");
    bride_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.phone;
    };
    let bride_sms = document.getElementById("bride-sms");
    bride_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.phone;
    };

    let bride_father_tel = document.getElementById("bride-father-tel");
    bride_father_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.father.phone;
    };

    let bride_father_sms = document.getElementById("bride-father-sms");
    bride_father_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.father.phone;
    };

    let bride_mother_tel = document.getElementById("bride-mother-tel");
    bride_mother_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.father.phone;
    };

    let bride_mother_sms = document.getElementById("bride-mother-sms");
    bride_mother_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.father.phone;
    };
}

$(document).ready(function (){

    setText();

    new WOW().init();

    $('.popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
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
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
                $('figure>img').parent().bind('contextmenu', function(e){ return false; });
            },
            imageLoadComplete: function () {
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
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
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
    $('#hide-photo').css('transition','max-height 1.5s ease-in');


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

        if(excludeNumbers.includes(imageNumber)){
            return;
        }
        let divElement = document.createElement('div');
        cnt++;
        if(cnt <= basicNumbers){
            divElement.className = 'grid-item';
        }else{
            divElement.className = 'grid-item hidden-photo visually-hidden';
        }

        let imgElement = document.createElement('img');
        imgElement.src = './img/gallery/' + imageNumber + '.jpeg';

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

    let account;
    switch (val){
        case 'groom': account=window.basic.groom.account; break;
        case 'groom-father': account=window.basic.groom.parents.father.account; break;
        case 'groom-mother': account=window.basic.groom.parents.mother.account; break;
        case 'bride': account=window.basic.bride.account; break;
        case 'bride-father': account=window.basic.groom.parents.father.account; break;
        case 'bride-mother': account=window.basic.groom.parents.mother.account; break;
        default : break;
    }
    copyToClipboard(account);
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

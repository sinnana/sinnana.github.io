window.basic = {
    "title": "박석범 & 장세희 결혼합니다.",
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
    "link": "https://saybeom.github.io/wedding_invitation",
    "kakao": {
        "description": "2024.09.28. 토요일 오후 12:40\n대전 루이비스 그레이스홀",
        "button" : "모바일 청첩장 보기"
    },
    "info": {

    }
}
const holidays = [16,17,18];
$(document).ready(function (){

    new WOW().init();

    let msnry = $('#grid-container').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter : 20,
        transitionDuration: 0
    });

    imagesLoaded( '#grid-container' ).on( 'progress', function() {
       // msnry.layout();
        $('#grid-container').masonry('layout');

    });

    $('.grid-item').magnificPopup(
        {
            delegate: 'img',
            type:'image',
            gallery: {
                enabled: true
            },
            callbacks: {
                elementParse: function(qw) {
                    qw.src = qw.el.attr('src');
                }
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
    <div>${monthNames[month - 1]} ${year}</div>
    <div class="week">
        ${["S", "M", "T", "W", "T", "F", "S"].map((day, index) => `<div class="${'day'}">${day}</div>`).join('')}
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

    $('#date-countdown').countdown({ until: wTime, format: 'dHMS', compact: true, timezone: +9 });
    $('#dday-countdown').countdown({ until: wDay, format: 'dHMS', compact: true, layout: '{dn}', timezone: +9 });

}

function getKakaoMap(location){
    const container = document.getElementById('map');

    const xy = new kakao.maps.LatLng(location.x, location.y);
    let options = {
        center: xy,
        level: 3
    };

    let map = new kakao.maps.Map(container, options);

    let marker = new kakao.maps.Marker({
        position: xy,
        map: map
    });

    marker.setPosition(xy);
}
function kakaoShare() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: window.basic.title,
            description: window.basic.kakao.description,
            imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_H4nAYkRMwlYpSSnpI7MZfmeTRaKglhmPZ3rdyL2FuDt-xXWS1maqYcKZBsk2KfLZA9p5YepMOI6ZpqgK8i7nw61dG3iRPnX8Pw8plj5-0N-zWkHFEMRmNwxnhwbOmXgUtlosiIn3cKqciC2HINV7HTWA3BXh2di8Ldc7JOPLh3szjIA3Iktqq7OBVBT3E1ehQ74RHT5wcvvribDOsRSABrF-Aa0-iAqEeQIRg_86DpM3fEQP6tMrBbE7kDA80nICTdy6745djQjDZsForSxLRpt_wP5g5SNx_EwSwmCYVge_-me6fzzFCAJts3npsL2GgTwtReqHOkkpFqZ7t6ujSVwZHDkqMZtO3HQOZV8AOAKP5woX16a9fDj71UCKyae1tzUii3kFsYKgSv9oSKmkFhJ64zVCyxvZuz82PdKynu4YBLB0kf3ByDrYvkzEbpRGoD0RrP7bj95-GhGD2qKr8kMOE-SfTDG5HP-CrtBXAPCT3c_iBwXH03vMRrCCCA2y92tElFQtTtnxdjZp2NToGhu4yLwXCOKDwOA4Qcp_hQGZR2D4AjgvUI2trwgAUAge_oueij5rLU5H7dfW5C1VxKIP8Oby-yscNT-EdU7t90NWHq7nbdFFMhxhuAEWDY5avacvpMr2C14HuLO6mF7-roRcCaqOuE40wdDeNYo1zqRHlR1LJnJlZG2bzwnfCy1NHGK0Z0j9Ed6qiPU46LS8r_pR9bPLMqyGxsgCwW6abJ-oMQJUXLA6oSdhNlbUHW-r7wbjy1jh5OK-zDtMdH3TOwQUdE55H7TAgPDTcqH2YUfEp0QCul9_lwzdiz-_Cg-ciuyjtJ10pnRRgqwe6ufTjkUKUm0IISrXJ4ztmbKZnaFnOOoa90uriMt5weIK0wChTY1JokIB1CXsfoF08du2RSBJwkL72WZ8IvhNzfoHxcRgglC1IL8b3615QDDU1TXF1qRiR3oD1fi56dqHQkmbiRF0h3DDD8m7vL7LVpW-lhXSCKR4alk44bxkwmSXuqM-CdtQpSRoc2LLRK4OBKUdOoV_UudnzHh1NxAFuIjC8GGM-qKweggNtZmj-ANJpC8fjCIdvutBv8dXamA9kD2AzlywlL8iDWntYB6DUdj1qbgEzmqdSApcrD3vxh-SK0xNjvO3MPbEfkB8wtCAoPuNlJJG7RFwExcgWVf0Ae_zkl-ETh4lUI1DZZy0rnQVMKo8uh9XMbdy9OLYWmV_0pLuqdssayvhWbUsSw6Bs04_kbe2wjrAjda6X8CjimhpynQJIJA-kT7_EizT1erlhWvWir4LQ8m_oHJfyrcSFWj7U9sFfKqvcJPMY-tjIQ5I9wSsxIyCHaK1MzU6P1Gg6kozBi4YmoBCbTYLhO47onMavBKMzlNhMfF_AY1jK92_MAP7g7GfuZefB-0GRZNmx5_nEA6UwhjTvzQRcOQKIMgLJxxMtOsfCW_LAVYvYkVB_UrnQI5szjW1uMEdE2Z-c9Fhas5my6TemA0A3Q2sFbJh1zFE53llfZSlaiQ00KmztaK8gBlM-5cYNbjs1CL3GAFCU7YtTeA67nSB73LB53WxpVLtbA8040q2MUGgVnxjKUvt6KKzwglT1vOsg32nQ1M-BEJafxT9kxCf0tg2c_3e6qH0r0jNc=w2326-h1596",
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

function copyToClipboard(val) {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
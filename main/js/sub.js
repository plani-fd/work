/*-------------------------------------------------
title       : 메인
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/

$(function () {
    /*------------------------------------------------- 서브메뉴 -------------------------------------------------*/

    // 3차 메뉴 가지고 있는 li에 클래스 추가
    $('#snb .list > ul > li').each(function (i) {
        if ($(this).find('ul').length > 0) {
            $(this).addClass('type1');
        }
    });

    // 3차 메뉴 펼치기
    /*$('#snb > .list > ul > li').classtoggle
        ({
            'button': '> a'   // 이벤트 받을 타겟 선택
        });*/

    // snb 3차 메뉴 펼치기
    $('#snb > .list > ul > li > a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(this).parent('li').hasClass('active') == false) {
                $(this).parent('li').addClass('active');
                $(this).parent('li').siblings().removeClass('active');
            }
            else {
                $(this).parent('li').removeClass('active');
            }

            return false;
        }
    });

    /*------------------------------------------------- //서브메뉴 -------------------------------------------------*/

    // 4차 탭메뉴 반응형일 때
    $('.depth4_tab').classtoggle
        ({
            'button': '.active a',  // 이벤트 받을 타겟 선택
            'respond': true          // 반응형일 때 (true 시 반응형일때 가로 사이즈 이하에서만 / click 일때만)
        });

    /*--------------------------------------------- location 중 list ---------------------------------------------*/

    // 메뉴로 사용
    $('.location .list > li').classtoggle
        ({
            'button': 'button'   // 이벤트 받을 타겟 선택
        });

    // 키보드 나갔을 때 리스트 닫음
    $('.location .list > li ul').find('a:last').keydown(function (e) {
        if (e.keyCode === 9) {
            $(this).parents('li').removeClass('active');
        }
    });

    /*-------------------------------------------- //location 중 list --------------------------------------------*/

    /*------------------------------------------------- 공유하기 -------------------------------------------------*/

    // 열기
    $('.share').classtoggle();

    // 키보드 나갔을 때 리스트 닫음
    $('.share').find('.close').keydown(function (e) {
        if (e.keyCode === 9) {
            $(this).parents('.share').removeClass('active');
        }
    });

    /*------------------------------------------------- //공유하기 -------------------------------------------------*/
});
 $(window).on('load', function () {
    setFlowBanner();  
})

function setFlowBanner(){
    const $roll = $('.rolling');
    const $list = $('.rolling .list');
    let rollWidth = $roll.width();
    let listWidth = $list.width();
    const speed = 60; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $roll.append($clone);
    flowBannerAct()

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < rollWidth) {
            const listCount = Math.ceil(rollWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $roll.append($clone);
            }
        }
        $roll.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
    } 
}
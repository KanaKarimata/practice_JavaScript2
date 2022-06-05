(() => {

  class Accordion {
    // 初期化
    constructor(obj){

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      //  ０個目のトリガーに対して、クリックイベントを持たせる
      // 実行された時にクリックハンドラーという関数を呼びます
      
      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen ){
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }
      // クリックハンドラーの中身はここから書いていきます
      clickHandler(e){
        e.preventDefault();
        const $target = e.currentTarget;
        const $content = $target.nextElementSibling;
        if($content.style.display === 'block'){
          $content.style.display = 'none';
        } else {
          $content.style.display = 'block';
      }
    }
  }

const fuckingAccordion = new Accordion({
  hookName: '#js-faq',
  tagName: 'p',
});
})();
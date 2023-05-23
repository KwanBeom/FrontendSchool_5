describe('click event가 발생하면 data를 가져와 렌더링해주는 class입니다', () => {
    it('viewManager에 textManager 객체가 정상적으로 전달되는지 확인합니다', () => {
        const textManager =  null
        const btnEl = document.querySelector('button'),
            viewerEl = document.querySelector('strong'),
            inputText = document.querySelector('input')
        // 인자가 잘 전달되는 지 확인하는 함수
        const actual = () => new ViewManager(textManager, {btnEl, viewerEl, inputText})
        expect(actual).toThrowError();
    })

    it('viewManager의 요소들이 인자로 잘 전달되는지 확인합니다', () => {
        const textManager =  new TextManager()
        const btnEl = null,
            viewerEl = null,
            inputText = null
        
        const actual = () => new ViewManager(textManager, {btnEl, viewerEl, inputText})
        expect(actual).toThrowError();
    })
    
    const textManager = new TextManager()
        btnEl = document.createElement('button'),
        viewerEl = document.createElement('strong'),
        inputText = document.createElement('input'),
        viewManager = new ViewManager(textManager, {btnEl, viewerEl, inputText});

    it('click event가 발생했을 때 changeValue 메서드가 실행되는 지 확인합니다', () => {
        // 특정 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');
        btnEl.click();
        // toHaveBeenCalled : 함수가 호출된적이 있는지 판별합니다.
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    it('changeValue 메서드가 실행된 후 updateView 메서드가 실행되는지 확인합니다', () => {
        // 특정 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        // toHaveBeenCalled : 함수가 호출된적이 있는지 판별합니다.
        expect(viewManager.updaeView).toHaveBeenCalled();
    }) 
})
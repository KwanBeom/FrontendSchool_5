describe('텍스트 관리자 테스트입니다', () => {
    const textManager = new TextManager()
    
    it('텍스트 값을 가져옵니다', () => {
        const initVal = textManager.getValue()
        expect(textManager.getValue()).toBe(initVal)
    })

    it('텍스트 값을 수정합니다', () => {
        const newValue = {data: 'hello abc'};
        textManager.setValue(newValue);

        expect(textManager.getValue()).toBe(newValue.data)
    })
})
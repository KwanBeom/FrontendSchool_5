describe('자스민 테스트 묶음', () => {
    // it 함수 : 함수 테스트 유닛
    it('인자를 전달하면 +1 해주는 함수입니다', () => {
        let num = 20
        // expect : 기대식, 실행할 함수의 결과값을 인수로 전달
        // toBe : matcher function, 내가 기대한 결과값과 일치하는지 판단
        expect(plusOne(20)).toBe(21)
    })
})
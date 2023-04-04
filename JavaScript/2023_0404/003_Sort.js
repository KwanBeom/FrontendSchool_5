// sort()는 사전식 정렬 시간이 지나도 못 바뀌는 내용
const nums = [3, 1, 8, 6];
nums.sort();

// sort를 어느 알고리즘으로 할거냐는 브라우저의 자유임

// 오름차순
nums.sort((a, b) => a - b)

// 내림차순
nums.sort((a, b) => b - a)

// 실무사용코드
function sort(key){
    if (click){
        click = false
        var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
    }
    else{
        click = true
        var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
}
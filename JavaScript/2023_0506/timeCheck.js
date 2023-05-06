let start = Date.now();

const result = (x) => {
    console.log(`${x}이 실행되는 데 걸리는 시간 : ${Date.now() - start}`);
};

const asyncBlocking = () => {
    return new Promise((resolve) => {
        let i = 0;
        while (i < 99999999) {
            i++;
        }
        resolve("blocking finished");
    });
};

result("동기식코드1");
setTimeout(() => {
    result("setTimeout finished");
}, 0);
result(asyncBlocking().then((txt) => result(txt)));
result("동기식코드2");

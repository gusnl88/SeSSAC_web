const crypto=require('crypto');//node js 내장 모듈 , 설치는 필요없다

/*
1.crypto를 이용한 💕단방향💕 암호화 구현 - 복호화 불가능
    -createHash(알고리즘)
    -pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1 ) createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
// 인코딩으로는 base64, hex, binary 등을 쓸 수 있음

// 비밀번호를 받아서 암호화 시켜주는 함수
const createHashPw=(pw)=>{
    return crypto.createHash("sha512").update(pw).digest("base64")
}

console.log('1st hashing',createHashPw('1234'))
console.log('2nd hashing',createHashPw('1234'))
console.log('3nd hashing',createHashPw('1234'))
console.log('another hashing',createHashPw('1234'))

// 1-2 ) pbkdf2Sync(암호화할 값, 솔트, 반복횟수, 키 길이, 알고리즘).toString(인코딩방식)
/*
    -솔트를 이용해서 해싱하는 함수
    -salt 생성: crypto.randomBytes(바이트수)
    -randomBytes 와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/

/*💕
const str='hello!'
const buffer= Buffer.from(str)// 100 001 형태이 버퍼가 16 진수로 표현 !!!!!
console.log(buffer)
💕*/


//💕💕💕💕💕💕회원가입 과정
// 새로운 hash 와 salt 를 만드는 과정 >> db에 hash와 salt 를 저장해야함
function saltAndHashPw(pw){
    const salt=crypto.randomBytes(16).toString("base64")//버퍼 형식으로 보내기때문에 toString 으로 인코딩 시켜준다 
    const iterations=100; //반복 횟수 
    const keylen = 64;//생성할 키의 길이
    const algorithm='sha512';

    const hash=crypto.pbkdf2Sync(pw,salt,iterations,keylen,algorithm).toString("base64");//버퍼 형식으로 보내기 때문에 toString 으로 인코딩 시켜준다
    return {hash,salt};//{hash:hash,salt:salt}
}

console.log("first hashing",saltAndHashPw('1234'))//모두 다른 값이 온다.
console.log("2nd hashing",saltAndHashPw('1234'))
console.log("3rd hashing",saltAndHashPw('1234'))
//salt 값이 다르기 때문에 모두 다른 값을 출력한다.


//💕💕💕💕💕로그인 과정!!
// db에 있는 hash 와 salt 를 이용해서
// input password의 hasg 값 검증
function checkPw(inputPw,savedSalt,savedHash){
    const iterations=100; // saltAndPw 랑 같아야 함 
    const keylen = 64;// saltAndPw 랑 같아야 함
    const algorithm='sha512';// saltAndPw 랑 같아야 함

    // inputPw 를 해시 시켜주는 작업  hash 값과 hash 값을 비교해봐야함
    const hash=crypto.pbkdf2Sync(inputPw,savedSalt,iterations,keylen,algorithm).toString('base64')

    return savedHash===hash;
}

const dbPw='qwer1234'

//회원가입 
const { salt:registerSalt , hash:registerHash } =saltAndHashPw(dbPw);

console.log("암호화에 쓰인 salt>>",registerSalt)
console.log("암호화에 쓰인 hash>>",registerHash)

//로그인 >> 비밀번호가 db의 hash 값과 일치하는지 확인

const isMatch=checkPw('qwer1234',registerSalt,registerHash)
const isMatch2=checkPw('qwer12345',registerSalt,registerHash)
console.log(isMatch);
console.log(isMatch2);

//2.양방향 암호화 : 복호화 가능
// createCipheriv()
const key= crypto.randomBytes(32)
const iv= crypto.randomBytes(16)

const algorithm="aes-256-cbc"

const originalMessage='hello, world!'
// 암호화
function encrypt(text){
    //1. 암호화 객체 생성
    // const cipher=crypto.createCipheriv(알고리즘,키,iv)
    const cipher=crypto.createCipheriv(algorithm,key,iv)

    //2.실제 데이터 암호화 작업
    // let encrypted= cipher.update(암호화할데이터,입력인코딩,출력인코딩);
    let encrypted= cipher.update(text,'utf8',"base64");
    
    //3.final 을 이용해서 최종 결과를 생성
    encrypted += cipher.final('base64')//final로 최종 인코딩 해야한다.

    return encrypted;
}

console.log("인크립트",encrypt(originalMessage))

// 복호화
function decrypt(encryptedText) {
    // 1. 복호화 객체 생성
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
  
    // 2. 실제 데이터 복호화
    //   base64로 인코딩된 문자열이 utf8형태로 복호화된다.
    let decrypted = decipher.update(encryptedText, "base64", "utf8");
  
    // 3. final을 이용해서 최종 결과 생성
    decrypted += decipher.final("utf8");
  
    return decrypted;
  }
  
  const encryptedMessage = encrypt(originalMessage); // 암호화
  console.log("암호화 됨", encryptedMessage);
  
  const decryptedMessage = decrypt(encryptedMessage);
  console.log("복호화 됨", decryptedMessage);
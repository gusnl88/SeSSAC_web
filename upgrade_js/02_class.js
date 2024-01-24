// class:오브젝트를 만둘 수 있는 틀!

/*속성
  -만들어진 연도 year
  -집의이름 name
  -창문의 갯수 window
  메소드
  -건물의 나이 출력 getAger(
    -창문의 개수 출력 getWindow()
  ) */

  class House {
    constructor(year,name,window){
        this.year=year;
        this.name=name;
        this.window=window;
    }

    //메소드
    getAge(){
        console.log(`${this.name}은 건축한지 ${2024-this.year}년 됐어요.`)
    }

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`)
    }
  }

  const house1 = new House(1789,'old',1);
  house1.getAge();
  house1.getWindow();
  console.log(house1.name)

  const house2 = new House(2015,'자이',10);
  house2.getAge();
  house2.getWindow();
  console.log(house2.name)

  console.log("-----------상속--------------")
  //extends 키워드를 사용해서 상속
  //하우스 클래스의 함수와 속성을 사용 할 수 있음
  //하우스<<아파트먼트
  class Apartment extends House{
    constructor(year,name,window,floor,windowMaker){
        super(year,name,window);
        this.floor=floor;
        this.windowMaker=windowMaker;
    }
    
    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}(은/는) 총 층수는 ${this.floor},창문의 갯수는 ${this.window}입니다.`;
    }
    // 오버라이딩
    //부모 클래스의 메소드 이름은 같지만 재사용 하는것 (메소드 재선언)
    getWindow(){
        return `${this.name}의 창문은 ${this.window}개 입니다.${this.windowMaker}에서 만들었습니다.`
    }
  }
  const ap1=new Apartment(1999,'자이',10,25,'창호cc');
  console.log(ap1.getAptInfo(),ap1.getWindow())//getWindow() -오버라이딩 함수, 메소드 재정의


  class shape{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    getArea(){
        return this.width*this.height;
    }
  }

  let rec1=new shape(3,4);
  console.log(rec1.getArea())
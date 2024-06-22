import connect from "../../connect/connect.js"
import User from "../../models/userSchema.js"
import Room from "../../models/roomSchema.js"

connect();

const room = await Room.findOne({_id : "6671baaa295d664b248c586a"});

const user_Insert = await User.create(
    // {
    //     userId : "hyeona023",
    //     password : "1234",
    //     name : "김현아",
    //     profileImg : "",
    //     email : "hyeona@gmail.com",
    //     address : "서울 강남구 테헤란로 518 섬유센터빌딩",
    //     phone : "010-1234-1234",
    //     wishList : [room]
    // },
    // {
    //     userId : "example1",
    //     password : "1234",
    //     name : "이순신",
    //     profileImg : "",
    //     email : "example1@gmail.com",
    //     address : "서울 송파구 올림픽로 300",
    //     phone : "010-4321-4321",
    //     wishList : [room]
    // },
    // {
    //     userId : "example2",
    //     password : "1234",
    //     name : "홍길동",
    //     profileImg : "",
    //     email : "example223@gmail.com",
    //     address : "경기 여주시 북내면 여양2로 672-18",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HwangKH",
    //     password : "1234",
    //     name : "황경화",
    //     profileImg : "",
    //     email : "HwangKH@gmail.com",
    //     address : "광주 서구 화운로175번길 15",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "BaeHY",
    //     password : "1234",
    //     name : "배혜연",
    //     profileImg : "",
    //     email : "BaeHY@gmail.com",
    //     address : "전남 여수시 소라면 죽림로 10",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "GoIS",
    //     password : "1234",
    //     name : "고인성",
    //     profileImg : "",
    //     email : "GoIS@gmail.com",
    //     address : "전남 여수시 미평로 77",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HongWJ",
    //     password : "1234",
    //     name : "홍우진",
    //     profileImg : "",
    //     email : "HongWJ@gmail.com",
    //     address : "전남 여수시 쌍봉로 316",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HongJH",
    //     password : "1234",
    //     name : "홍재호",
    //     profileImg : "",
    //     email : "HongJH@gmail.com",
    //     address : "경남 사천시 벌리6길 29",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "NamGungHS",
    //     password : "1234",
    //     name : "남궁해성",
    //     profileImg : "",
    //     email : "NamGungHS@gmail.com",
    //     address : "경남 창원시 성산구 원이대로 774",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "JangYJ",
    //     password : "1234",
    //     name : "장연진",
    //     profileImg : "",
    //     email : "JangYJ@gmail.com",
    //     address : "대구 남구 대덕로 166",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "SulSH",
    //     password : "1234",
    //     name : "설성환",
    //     profileImg : "",
    //     email : "SulSH@gmail.com",
    //     address : "부산 부산진구 마철로 114",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "LeeWM",
    //     password : "1234",
    //     name : "이우민",
    //     profileImg : "",
    //     email : "LeeWM@gmail.com",
    //     address : "전북특별자치도 고창군 고창읍 보릿골로 57-15",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "KangBH",
    //     password : "1234",
    //     name : "강병현",
    //     profileImg : "",
    //     email : "KangBH@gmail.com",
    //     address : "전북특별자치도 익산시 고현로8길 7-6",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "KwonHW",
    //     password : "1234",
    //     name : "권현우",
    //     profileImg : "",
    //     email : "KwonHW@gmail.com",
    //     address : "대전 서구 관저동로90번길 15",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "JangDH",
    //     password : "1234",
    //     name : "장동호",
    //     profileImg : "",
    //     email : "JangDH@gmail.com",
    //     address : "대전 유성구 도안대로 560",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "YangCH",
    //     password : "1234",
    //     name : "양천화",
    //     profileImg : "",
    //     email : "YangCH@gmail.com",
    //     address : "경북 경주시 북성로 61",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "JeonHT",
    //     password : "1234",
    //     name : "전형태",
    //     profileImg : "",
    //     email : "JeonHT@gmail.com",
    //     address : "울산 중구 약사로 20",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HanJH",
    //     password : "1234",
    //     name : "한진하",
    //     profileImg : "",
    //     email : "HanJH@gmail.com",
    //     address : "경남 창녕군 창녕읍 봉천길 23",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "SimDH",
    //     password : "1234",
    //     name : "심동하",
    //     profileImg : "",
    //     email : "SimDH@gmail.com",
    //     address : "경남 통영시 북신로 22",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "SagongBC",
    //     password : "1234",
    //     name : "사공범철",
    //     profileImg : "",
    //     email : "SagongBC@gmail.com",
    //     address : "경기 수원시 영통구 동수원로 316",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "SimDY",
    //     password : "1234",
    //     name : "심도연",
    //     profileImg : "",
    //     email : "SimDY@gmail.com",
    //     address : "경기 남양주시 경춘로1256번길 24",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "MoonSJ",
    //     password : "1234",
    //     name : "문상진",
    //     profileImg : "",
    //     email : "MoonSJ@gmail.com",
    //     address : "서울 용산구 유엔빌리지3길 2",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "KangYS",
    //     password : "1234",
    //     name : "강용수",
    //     profileImg : "",
    //     email : "KangYS@gmail.com",
    //     address : "서울 강남구 테헤란로22길 45",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "PungSE",
    //     password : "1234",
    //     name : "풍소은",
    //     profileImg : "",
    //     email : "PungSE@gmail.com",
    //     address : "인천 연수구 원인재로 315",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HwangHW",
    //     password : "1234",
    //     name : "황현우",
    //     profileImg : "",
    //     email : "HwangHW@gmail.com",
    //     address : "경기 시흥시 장현순환로 58",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "SungSM",
    //     password : "1234",
    //     name : "성수민",
    //     profileImg : "",
    //     email : "SungSM@gmail.com",
    //     address : "경기 화성시 남양읍 시청로32번길 59",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HanJS",
    //     password : "1234",
    //     name : "한진수",
    //     profileImg : "",
    //     email : "HanJS@gmail.com",
    //     address : "경기 이천시 경충대로2652번길 10-18",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HwangJH",
    //     password : "1234",
    //     name : "황준현",
    //     profileImg : "",
    //     email : "HwanJH@gmail.com",
    //     address : "충북 청주시 상당구 중앙로 83",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "HaJH",
    //     password : "1234",
    //     name : "하정화",
    //     profileImg : "",
    //     email : "HaJH@gmail.com",
    //     address : "세종특별자치시 새롬중앙로 90",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "SinJH",
    //     password : "1234",
    //     name : "신정환",
    //     profileImg : "",
    //     email : "SinJH@gmail.com",
    //     address : "경북 구미시 백산로5길 9",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "YangHH",
    //     password : "1234",
    //     name : "양희훈",
    //     profileImg : "",
    //     email : "YangHH@gmail.com",
    //     address : "전남 목포시 남악1로 51",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
    // {
    //     userId : "ChoHH",
    //     password : "1234",
    //     name : "조혜훈",
    //     profileImg : "",
    //     email : "ChoHH@gmail.com",
    //     address : "충남 서산시 율지6로 29",
    //     phone : "010-1111-1111",
    //     wishList : [room]
    // },
)
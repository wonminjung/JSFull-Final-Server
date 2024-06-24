import connect from "../../connect/connect.js";
import Comment from "../../models/commentSchema.js";
import User from "../../models/userSchema.js"
import Room from "../../models/roomSchema.js"

connect();

// 리뷰 목록
const reviewList = [
    {
        body : `씻을때 수압이 약한거 빼고는 정말 숙소 청결상태, 인테리어, 뷰 모두 좋았어요. 호스트님도 친절하시고, 보일러도 빵빵하니 좋았습니다.`,
        star : 4,
        grade : {
            clean : 4,
            accuracy : 4,
            communication : 4,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `근처에 좋은 레스토랑과 코너 상점이 있어 편안하게 머물 수 있습니다. 우리가 사랑했던 커피 머신이 있었어요!`,
        star : 4,
        grade : {
            clean : 3,
            accuracy : 4,
            communication : 4,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `근처에 좋은 레스토랑과 코너 상점이 있어 편안하게 머물 수 있습니다. 우리가 사랑했던 커피 머신이 있었어요!`,
        star : 4,
        grade : {
            clean : 3,
            accuracy : 4,
            communication : 4,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `분위기도 위치도 좋았습니다 주변 맛집 설명해주시는 것도, 소통이 잘 되는 것도 너무 좋았어요 !!`,
        star : 4,
        grade : {
            clean : 3,
            accuracy : 4,
            communication : 5,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `전반적으로 만족스럽습니다. 겨울에는 입실 때 다소 추웠습니다. 보일러 사용하니 이후에는 까뜻해졌구요. 다른 계절에는 괜찮았을 것 같구요`,
        star : 4,
        grade : {
            clean : 5,
            accuracy : 4,
            communication : 4,
            location : 4,
            priceSatis : 5,
        },
    },
    {
        body : `너무 깨끗하고 좋았습니다. 하지만 밤이 되면 숙소 들어가는 길이 조금 무서웠습니다. 그리고 욕실에 천장이 조금 지저분했습니다. 하지만 그거 외에는 너무너무 좋고 넓고 깨끗하고 좋았습니다.`,
        star : 4,
        grade : {
            clean : 4,
            accuracy : 4,
            communication : 3,
            location : 4,
            priceSatis : 3,
        },
    },
    {
        body : "숙소가 너무 깨끗하고 아늑했어요! 동네가 너무 아름답고 평화롭습니다! 적극 추천!",
        star : 5,
        grade : {
            clean : 5,
            accuracy : 5,
            communication : 5,
            location : 4,
            priceSatis : 4,
        },
    },
    {
        body : `호스트분이 굉장히 친절하시고 소통이 빠릅니다. 둘이서 묵기에 넉넉하고 넓은 공간입니다. 종이컵, 물티슈, 면봉 등 세심함이 느껴지는 숙소였어요.`,
        star : 5,
        grade : {
            clean : 5,
            accuracy : 5,
            communication : 5,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `숙소가 아주 깔끔했고 호스트 분이 꼼꼼하신 성격이라는게 느껴졌습니다!`,
        star : 5,
        grade : {
            clean : 5,
            accuracy : 4,
            communication : 5,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `가격대비 최상의 위치와 서비스입니다!
너무 잘 이용하고 왔어요:)`,
        star : 5,
        grade : {
            clean : 4,
            accuracy : 5,
            communication : 5,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `유학생인데 나가기 전에 한 번 더 놀러왔어요. 좋은 시간 보내다가 가요!💛 호스트님은 여전히 친절하시고, 룸도 여전히 청결, 깔끔합니다용😆`,
        star : 5,
        grade : {
            clean : 5,
            accuracy : 5,
            communication : 5,
            location : 5,
            priceSatis : 5,
        },
    },
    {
        body : `요 몇 년간 가본 숙소중에 가장 마음에 들었어요! 은은한 향기에 체크인부터 기분 좋았는데
감각적인 소품들도 너무 마음에 들었고, 도구랑 화장실 수전까지 반짝반짝 깨끗해서 놀랐어요.`,
        star : 5,
        grade : {
            clean : 5,
            accuracy : 5,
            communication : 4,
            location : 4,
            priceSatis : 5,
        },
    },
    {
        body : `청결하고 컨디션 좋았어요! 후기 같은건 원래 잘 안남기는 스타일인데 쓰네요.
호스트님이 친절하시고 객실도 생각했던 것보다 훨씬 좋았어요. 저는 무엇보다 침대가 매우 좋았습니다. 여자친구는 들어가자 마자 풍기는 방 분위기가 좋았다고 하네요. 재방문 의사 있습니다!`,
        star : 5,
        grade : {
            clean : 5,
            accuracy : 5,
            communication : 4,
            location : 4,
            priceSatis : 5,
        },
    },
    {
        body : `시설이 훌륭한 숙소입니다.
호스트님의 설명이 자세하고 사진과 일치해 잘 숙박하고 갑니다.`,
        star : 5,
        grade : {
            clean : 5,
            accuracy : 5,
            communication : 5,
            location : 4,
            priceSatis : 5,
        },
    },
    {
        body : `결혼기념일 여행이었는데 아주 편하고 즐거운 여행이었어요. 시설도 좋았어요. 다음에도 서울가게 되면 이용할 계획이에요.`,
        star : 5,
        grade : {
            clean : 5,
            accuracy : 4,
            communication : 4,
            location : 4,
            priceSatis : 5,
        },
    },
    {
        body : `방에 도착했을 때 욕실에서 곰팡이 냄새가 나고 화장실 구석구석 머리카락이 보였습니다. 변기 뒤쪽에 먼지가 상당했습니다.위치가 훌륭하고, 가까운 곳에 이마트가 있고, 훌륭한 레스토랑이 있습니다.`,
        star : 2,
        grade : {
            clean : 2,
            accuracy : 4,
            communication : 2,
            location : 4,
            priceSatis : 5,
        },
    },
    {
        body : `문이 찌그러졌는지 도어락이 잘 잠기지 않았음. 여러번 확인 필요함. 사진에 비해 생각보다 숙소 크기가 작음. 화장실 매우 작음. 밤 음주가무 소리에 시끄러움.`,
        star : 2,
        grade : {
            clean : 4,
            accuracy : 2,
            communication : 3,
            location : 2,
            priceSatis : 1,
        },
    },
    {
        body : `가격에 비해 침대 매트리스가 너무 안좋아 아이도 어른도 밤새잠을 설쳤네요`,
        star : 2,
        grade : {
            clean : 4,
            accuracy : 2,
            communication : 3,
            location : 2,
            priceSatis : 1,
        },
    },
    {
        body : `밤에 벌레가 너무 많고, 숙소도 지저분해서 최악이에요 ㅠㅠ`,
        star : 1,
        grade : {
            clean : 1,
            accuracy : 3,
            communication : 2,
            location : 2,
            priceSatis : 3,
        },
    },
    {
        body : `청소가 제대로 되어있지 않아요. 옷걸이에 다른 분의 마스크가 있었습니다. 또 기관지가 약해 체크인 전에도 에어컨에 대해 청소 제대로 부탁드렸었는데 낮잠 자다가 목이 너무 아파 혹시나해서 확인해보니 필터에 먼지 가득 곰팡이처럼 끼어있어서 바로 퇴실했습니다. `,
        star : 1,
        grade : {
            clean : 1,
            accuracy : 2,
            communication : 2,
            location : 2,
            priceSatis : 1,
        },
    },
    {
        body : `1. 곰팡이가 있는데 벽지로 덮여 있습니다. 2. 바퀴벌레 3. 하수구 냄새가 강함
이런 문제로 인해 퇴실했습니다.`,
        star : 1,
        grade : {
            clean : 1,
            accuracy : 2,
            communication : 2,
            location : 3,
            priceSatis : 1,
        },
    },
    {
        body : `청결이나 숙소 컨디션은 좋은 편입니다.다만 방음이나, 퇴실시에 쓰레기를 바깥에 있는 쓰레기처리 장소에 가져다 두어야 하는게 좀 번거로웠습니다.`,
        star : 3,
        grade : {
            clean : 4,
            accuracy : 3,
            communication : 4,
            location : 2,
            priceSatis : 2,
        },
    },
    {
        body : `숙소가 차없이는 갈수없는 곳이에요. 그리고 저녁에 가면 초보분들은 힘들수도 있을것 같습니다. 집이 넓어서 아기랑 셋이서 지내기 좋았으나 수압이 너무너무너무 약해요..... 씻기 힘들정도로 그것빼곤 다 만족했어요.`,
        star : 3,
        grade : {
            clean : 4,
            accuracy : 3,
            communication : 4,
            location : 2,
            priceSatis : 2,
        },
    },
    {
        body : `전망대 뷰도 좋아요!
주방과 침실도 넓어서 편하게 쉴 수 있었어요
한가지 아쉬운 점은 그냥 전체적으로 지저분했어요
먼지뭉텅이가 굴러다니고 바닥, 침대에서 머리카락이 보이고, 화장실 욕조벽면은 곰팡이범벅이었구요. 정말 다 좋은데 청소상태가 아쉬웠어요.`,
        star : 3,
        grade : {
            clean : 2,
            accuracy : 3,
            communication : 3,
            location : 2,
            priceSatis : 3,
        },
    },
    {
        body : `생각보다 건물이 낡아서 놀랬어요.. 방충망 다 찢어져 있고 설거지도 제대로 안되어있던데요.. 눈에 보이는 부분들만 깨끗하게 청소하시는 것 같아요… 청결상태너무 별로였어요`,
        star : 3,
        grade : {
            clean : 3,
            accuracy : 4,
            communication : 4,
            location : 3,
            priceSatis : 4,
        },
    },
    {
        body : `창 밖으로 펼쳐지는 뷰가 관광을 하지 않아도 되겠다는 생각을 하게 만들었음.
창 하나 하나가 바다를 마주보고 그림처럼 예쁘게 위치해있음.`,
        star : 3,
        grade : {
            clean : 3,
            accuracy : 4,
            communication : 4,
            location : 3,
            priceSatis : 4,
        },
    },
    {
        body : `숙소 근처 편의시설이 많고 조용하고 깨끗해서 편하게 쉬다왔습니다`,
        star : 3,
        grade : {
            clean : 4,
            accuracy : 3,
            communication : 3,
            location : 4,
            priceSatis : 3,
        },
    },
    {
        body : `수압이 정말정말 약합니다ㅜ 화장실이 좁고 곰팡이가 좀 있어용 경치는 정말 좋았어요👍🏻`,
        star : 3,
        grade : {
            clean : 3,
            accuracy : 4,
            communication : 3,
            location : 5,
            priceSatis : 3,
        },
    },
]

const rooms = await Room.find();
const dbUsers = await User.find({}, {_id: true, userId: true, name: true });

const room = await Room.findById("6677e7feda6e844a7592619f");
const comment = await Comment.find({roomId: room.id}, {_id: true, body: true});
console.log(comment);
// const comment = await Comment.find({roomId: room.id});
// console.log(comment);
// console.log(comment.length);

const randomDeduplication = (count, limit) => {
    let array = [];

    for (let i=0; i<count; i++) {
        let randomNum = Math.floor(Math.random() * limit);
        if (array.indexOf(randomNum) === -1) {
            array.push(randomNum);
        } else {
            i--;
        }
    }
    return array;
};

rooms.forEach(async (room) => {
    let randomCount = Math.floor(Math.random() * 10 + 2);
    let randomIndexArray = randomDeduplication(randomCount, dbUsers.length);

    let users = [];
    for (let randomIndex of randomIndexArray) {
        users.push(dbUsers[randomIndex]._id.toString());
    }

    let randomStarIndexArray = [];
    for (let i = 0; i < randomCount; i++) {
        randomStarIndexArray.push(Math.floor(Math.random() * reviewList.length));
    }

    let roomObId = room._id.toString();
    for (let i = 0; i < randomCount; i++) {
        // let comment_Insert = await Comment.create(
        //     {
        //         userId : users[i],
        //         roomId : roomObId,
        //         ...reviewList[randomStarIndexArray[i]],
        //     },
        // )
    }


});
define(function () {
    console.log('questions');

    return [
        {
            desc: 'Если ветер все время дует с востока на запад, полет из Москвы в Нью-Йорк и обратно в сумме займет больше, меньше или столько же времени, чем в безветренную погоду?',
            img: 'http://cs613418.vk.me/v613418333/c323/_2mneprbB2o.jpg',
            answers: [
                'Больше',
                'Меньше',
                'Столько же'
            ],
            right: 'Больше',
            explain: 'Коэффициент лобового сопротивления возрастает нелинейно с увеличением скорости, поэтому проигрыш от встречного ветра всегда будет больше выигрыша от попутного.'
        },
        {
            desc: 'Какое минимальное число надрезов ножом необходимо, чтобы разделить пачку масла на 27 кусочков?',
            img: 'http://cs613418.vk.me/v613418333/c32a/M9twQectayA.jpg',
            answers: [
                '10',
                '12',
                '8',
                '6'
            ],
            right: '6',
            explain: 'Каждую «целую» грань куска масла нужно разделить двумя надрезами на три части.'
        },
        {
            desc: 'В 15:15 какой угол образуют минутная и часовая стрелки?',
            img: 'http://cs613418.vk.me/v613418333/c331/8a5RwGjnorE.jpg',
            answers: [
                '0',
                '7,5',
                '6',
                '5,5'
            ],
            right: '7,5',
            explain: 'Часовая стрелка сместится на 1/4 часа от цифры 3, что составляет 360/12/4 градусов.'
        },
        {
            desc: 'У вас есть стопка монет высотой со 100-этажный дом. Поместятся ли эти монеты у вас в комнате?',
            img: 'http://cs613418.vk.me/v613418333/c338/CVBqhgD_o6A.jpg',
            answers: [
                'Да',
                'Нет',
                'Зависит от высоты потолков и размеров комнаты'
            ],
            right: 'Да',
            explain: 'Стопка со 100-этажный дом может быть разбита на 100 стопок высотой в один этаж каждая. 100 стопок – это площадь квадрата 10 х 10 монет, такой квадрат можно разместить в любой комнате.'
        },
        {
            desc: 'Перед вами три закрытых ящика. В одном яблоки, в другом апельсины, в третьем – яблоки и апельсины вперемешку. На каждом из них табличка с названием – «яблоки», «апельсины» или «микс». Но все таблички перепутались местами. Можно ли, не заглядывая в коробку, вытянуть фрукт и, посмотрев на него, тут же правильно разместить таблички на всех трех коробках?',
            img: 'http://cs613418.vk.me/v613418333/c33f/hUg9tISsY3E.jpg',
            answers: [
                'Да',
                'Нет'
            ],
            right: 'Да',
            explain: 'Решение сводится к тому, чтобы определить, насколько соответствует содержимое одного ящика его надписи, и в зависимости от этого поменять местами надписи на двух других.'
        },
        {
            desc: 'Вы плаваете в лодке в бассейне. В лодке лежит кирпич. Если кирпич выбросить в бассейн, что произойдет с уровнем воды?',
            img: 'http://cs613418.vk.me/v613418333/c346/t2bFbGaxSf0.jpg',
            answers: [
                'Повысится',
                'Не изменится',
                'Понизится'
            ],
            right: 'Понизится',
            explain: 'Находясь в лодке, кирпич вытесняет объем воды X, которая весит столько же, сколько он сам. В то время как в погруженном состоянии он выталкивает объем воды Y, равный своему объему. Объем кирпича (Y) меньше, чем объем воды того же веса (X), из-за разницы в плотности кирпича и воды. Поэтому лежащий на дне кирпич вытесняет меньше воды, чем кирпич в лодке.'
        },
        {
            desc: 'Перед вами три коробки, в одной из которых приз. Вы можете выбрать одну коробку из трех. После этого вам откроют пустую из двух оставшихся и предложат пересмотреть свой выбор. Что выгоднее?',
            img: 'http://cs613418.vk.me/v613418333/c34d/vGYQCbfJy7M.jpg',
            answers: [
                'Выбрать другую коробку',
                'Оставить выбор'
            ],
            right: 'Выбрать другую коробку',
            explain: 'Выгоднее выбрать другую коробку, так как при первоначальном выборе вероятность выигрыша была 1/3, а после того как ведущий открыл одну из коробок, вероятность выигрыша при выборе другой коробки увеличилась.'
        },
        {
            desc: 'Вы садитесь на горнолыжный подъемник, чтобы подняться на вершину горы. Какую часть кабинок вы встретите по дороге наверх?',
            img: 'http://cs613418.vk.me/v613418333/c354/hf_HMl5_1qM.jpg',
            answers: [
                'Половину',
                'Четверть',
                'Все кабинки',
                'Три четверти'
            ],
            right: 'Все кабинки',
            explain: 'Вы встретите все кабинки, в которых нет вас.'
        },
        {
            desc: 'Вы едете в машине, у вас в руке воздушный шарик, наполненный гелием. Окна закрыты. Если вы надавите на педаль газа, что произойдет с шариком?',
            img: 'http://cs613418.vk.me/v613418333/c35b/QI6XvRo4ifc.jpg',
            answers: [
                'Наклонится вперед',
                'Наклонится назад',
                'Останется на месте'
            ],
            right: 'Наклонится вперед',
            explain: 'Газ в шарике имеет меньшую плотность, чем воздух. Когда воздух в машине начнет смещаться назад, шарик сместится вперед.'
        },
        {
            desc: 'Представьте, что вы уменьшились до размеров пятирублевой монеты и вас посадили в миксер. Сейчас миксер включат, и нож начнет вращаться. Что вы предпримите для спасения?',
            img: 'http://cs613418.vk.me/v613418333/c362/Wjai8ZPXDho.jpg',
            answers: [
                'Найду укромное место, куда не достают лопасти ножа',
                'Найду укромное место, куда не достают лопасти ножа',
                'В такой ситуации ничего предпринимать не буду'
            ],
            right: 'В такой ситуации ничего предпринимать не буду',
            explain: 'Если вы уменьшитесь до размеров пятирублевой монеты, ваша плотность возрастет настолько, что ножи миксера просто разрушатся о вас, не причинив никакого вреда.'
        }
    ]
});
(() => {
    console.log('winter is coming');

    let lightBox = document.querySelector('.lightbox'),
        lbClose = lightBox.querySelector('span'),
        lbVideo = lightBox.querySelector('video'),
        sigils = document.querySelectorAll('.sigilContainer'),
        houseImages = document.querySelector('#houseImages'),
        houseName = document.querySelector('.house-name'),
        houseBio = document.querySelector('.house-info');
        playButton = document.querySelector('.fa-play'),
        pauseButton = document.querySelector('.fa-pause'),
        playAgainButton = document.querySelector('.fa-backward'),
        volumeButton = document.querySelector('.fa-volume-up');

        const houseInfo = [
            ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.
            `, "./video/House-Stark.mp4"],
            ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.
            House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.
            `, "./video/House-Baratheon.mp4"],
            ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.
            The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.
            `, "./video/House-Lannister.mp4"],
            ["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."
            `, "./video/House-Tully.mp4"],
            ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.
            House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.
            `, "./video/House-Greyjoy.mp4"],
            ["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.
            `, "./video/House-Arryn.mp4"],
            ["Targaryen", `House Targaryen of Dragonstone is an exiled Great House of Westeros and the former royal house of the Seven Kingdoms. House Targaryen conquered and unified the realm before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The two surviving Targaryens, Viserys and Daenerys, fled into exile to the Free Cities of Essos across the Narrow Sea. House Lannister replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor, but the realm was reconquered by Daenerys Targaryen, retaking the Iron Throne following the Battle of King's Landing. After she laid waste to a surrendered King's Landing, Daenerys was assassinated by Jon Snow to prevent further destruction. Jon became the last known living member of House Targaryen and his identity as the son of Rhaegar Targaryen is kept hidden from Westeros. He is exiled to the Night's Watch for the assassination of Daenerys. The bloodline of House Targaryen also still exists in various houses, such as House Baratheon, House Velaryon, and House Martell.
            `, "./video/House-Targaryen.mp4"],
            ["Tyrell", `House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount of the Mander and the liege lords of the Reach. A large, wealthy house, its wealth is only surpassed among the Great Houses by House Lannister, and the Tyrells can field the greatest armies. Additionally, if they call the ships of the Redwyne fleet, the lords of the Shield Islands, and the coastal lords, they can command a navy that equals if not surpasses the royal fleet of King's Landing`, "./video/House-Tyrell.mp4"],
            ["Frey", `House Frey of the Twins is the former Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex by the subsequent assassination of all male Freys soon after. After the defeat of Cersei Lannister, Edmure Tully took back his title of Lord of the Riverlands and Riverrun became the Great House of the Riverlands again.
            `, "./video/House-Frey.mp4"],
        ]


    function showLightBox(event) {
        const index = event.currentTarget.dataset.offset;
        lbVideo.src = houseInfo[index][2];

        setTimeout(function() {
            lightBox.classList.add('show-lightbox');
            lbVideo.play();
        }, 1000);
    }

    function hideLightBox() {
        lightBox.classList.remove('show-lightbox')
        lbVideo.currentTime = 0;
        lbVideo.pause();
    }


    function playVideo() {
        lbVideo.play();
    }

    function pauseVideo() {
        lbVideo.pause();
    }

    function playAgainVideo() {
        lbVideo.currentTime = 0;
    }

    function muteVideo() {
        lbVideo.muted = !lbVideo.muted;
    }



    function animateBanner() {

        houseImages.style.right = `${this.dataset.offset * 600}px`;
        houseName.textContent = `House ${houseInfo[this.dataset.offset][0]}`;
        houseBio.textContent = `${houseInfo[this.dataset.offset][1]}`
    }

    sigils.forEach(sigil => sigil.addEventListener('click', showLightBox));

    sigils.forEach(sigil => sigil.addEventListener('click', animateBanner));

    lbClose.addEventListener('click', hideLightBox);

    lbVideo.addEventListener('ended', hideLightBox);
    playButton.addEventListener('click', playVideo);
    pauseButton.addEventListener('click', pauseVideo);
    playAgainButton.addEventListener('click', playAgainVideo);
    volumeButton.addEventListener('click', muteVideo);



})();

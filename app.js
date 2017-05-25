$(document).ready(function() {

  function setList() {
    var names = ['The Punisher','Lightning Strike','Purple Thunder','Choke Hold',
                 'Tickling Fairy','The Giant','Bobo Brazile','Crybaby Cannon',
                 'Porkchop Cash','Bone Bruiser','Great Kabuki','The Poker Face',
                 'P.S. ','The Undertaker','Dirty Margarita','The Tickler',
                 'Guardian Stopper','Liberal Crusher','Big Black Cactus',
                 'Sweet Daddy','The Hit Man','Ugandan Giant',
                 "Putin's Pussy...cat",'The Dachshund','Grumbling Goat',
                 'Dinosaur Rider','Uncle Fluffy','Aunt Steve',
                 'The Backdoor Banger','Gary','The Anglican','The Cowboy',
                 'The Disabled Danger','The Trumpeter','The White Widow',
                 'Bad News ','Sister Stephanie','The Paleontologist',
                 'Angry Jesus','Tear Wrangler','The Rowdy Reporter',
                 'Mic Dropper','Outta My Face','CBO Scorcher','Not Governor',
                 '69','Bible Basher','Big Nose','Creeping Mary','Small Hands',
                 'Orange Face','Pussy Grabber','White Trash Basher',
                 'Angry White Guy','Climate Denier','9-point Bucky',
                 'Scrooge McGee','Dirty Pinkie','Montana Madness','Moose',
                 'Spectacle Smasher','Wham Bam ','Madam Daines',
                 'Assault Astronaut','Nixonater','GOP Pounder','Soaring Ranger',
                 'El Chinchon','Saving Susan','First Trimester Abortion',
                 'Pebbles','The Ellipsis','Onion Peel','Soft Serve',
                 'The Cats Meow','The Milkshaker','The Milk Mustache']

    var $container = $('.js--names')
    $container.html('')

    names = names.sort(function() { return 0.5 - Math.random() }).slice(0, 10)

    for (var i = 0; i < names.length; i++) {
      $container.append("<div class='outer'><div class='inner'><span>"+names[i]+"</span></div></div>")
    }
    $container.slotMachine({ delay : 450 }).shuffle(1)

  }

  setList()

})

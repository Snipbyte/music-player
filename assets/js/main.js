   $(document).ready(function()
   {
   	audio = document.querySelector('audio');
   	$("#play_track").click(function()
   	{
   		if (audio.paused) {
   			audio.play();
   			$(this).children("i").removeClass("fa-play")
   			$(this).children("i").addClass("fa-pause")
   		}
   		else
   		{
   			audio.pause();
   			$(this).children("i").removeClass("fa-pause")
   			$(this).children("i").addClass("fa-play")
   		}
   	})
    let songsList = [
    {
        song: "See You again",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "unstobale",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "Tere Bin",
        path: "https://www.computerhope.com/jargon/m/example.mp3"

    },
    {
        song: "Kahani Suno",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "Lehenga",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "Nira Ishq",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "Tees Maar Khan",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "Tu jo mila",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "Ho gya Mai Pagal",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },
    {
        song: "Dharrkan",
        path: "https://www.computerhope.com/jargon/m/example.mp3"
    },

    ]
    for (let i = 0; i < songsList.length; i++) {
        $("#list").append('<li class="d-flex justify-content-between shaddow font-weight-bold shadow" style="background-color : #28282B"><h5 class="p-3">'+songsList[i].song+'</h5><button id="" class="play_song_btn p-3 border-0 rounded-circle" style="background-color:#28282B; color: #ED5EDD;"><i class="fa fa-play"></i></button></li>')
    }
    $(".play_song_btn").click(function()
    {
        $(".play_song_btn").children("i").removeClass("fa-pause")
        $(".play_song_btn").children("i").addClass("fa-play")
        $(this).children("i").addClass("fa-pause");
        $(this).children("i").removeClass("fa-play");
        $("#song_name").html($(this).siblings('h5').html());
        if (audio.paused) {
            audio.play();  
            $("#play_track").children("i").addClass("fa-pause");
            $("#play_track").children("i").removeClass("fa-play");
            $(this).children("i").removeClass("fa-play");
            $(this).children("i").addClass("fa-pause");
        }
        else
        {
            audio.pause();
            $("#play_track").children("i").addClass("fa-play");
            $("#play_track").children("i").removeClass("fa-pause");
            $(this).children("i").removeClass("fa-pause")
            $(this).children("i").addClass("fa-play")
        }
    })
    $("#next_track_btn").click(function()
    {
        let current_song = $("#song_name");
        for (let i = 0; i < songsList.length; i++) {
           if (songsList[i].song == current_song.html()) {
            let next_song = songsList[i+1].song
            let song_path = songsList[i+1].path
            current_song.html(next_song);
            $("audio").attr("src",song_path);
            audio.play();
            i++;
            if (i+1 == songsList.length) {
                current_song.html(songsList[0].song);
            }
        }
    }
}); 
    $("#previous_track_btn").click(function()
    {
        let current_song = $("#song_name");
        for (let i = 0; i < songsList.length; i++) {
            if (songsList[i].song == current_song.html()) 
            {
                if (current_song.html() == songsList[0].song) 
                {
                    current_song.html(songsList[songsList.length - 1].song);     
                }
                else
                {
                    let prev_song = songsList[i-1].song
                    let song_path = songsList[i-1].path
                    $("audio").attr("src",song_path);
                    current_song.html(prev_song);
                    audio.play();
                }
            }

        }
    });
});
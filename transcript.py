from youtube_transcript_api import YouTubeTranscriptApi

def get_video_transcript(url):
    video_id = url.split("_channel")[0].split("v=")[1]
    print(video_id)
    text = ""
    try:
        transcripts = YouTubeTranscriptApi.get_transcript(video_id)
        for i in transcripts:
            text += i['text']
        return text
    except:
        return "NO-TRANSCRIPT"




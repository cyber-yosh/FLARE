from flask import Flask, request
from youtube_transcript_api import YouTubeTranscriptApi
from transcript import get_video_transcript
import asyncio
import websockets
from openai import OpenAI
app = Flask(__name__)

client = OpenAI(
    api_key="OPENAI_API_KEY"
)
def summarize_text(text):
    prompt = "This is a piece of text. Summarize this piece of text in concise bullet points: " + text
    response = client.chat.completions.create(
        model="gpt-4-0125-preview",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=1,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return response.choices[0].message.content

def summarize_video(url):
    text = get_video_transcript(url)
    if (text=='NO-TRANSCRIPT'):
        return "This Video Has No Transcript: Cannot Summarize Video"
    prompt = "This is the transcript of a Youtube video. Please summarize this in concise bullet points: "+text
    response = client.chat.completions.create(
        model="gpt-4-0125-preview",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=1,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return response.choices[0].message.content

@app.route('/summarizeVideo', methods=['POST'])
def handle_video_summarization_request():
    data = request.json
    url = data.get('url')

    summarized_text = summarize_video(url)
    return {"summarized_text": summarized_text}

@app.route('/summarizeHighlighted', methods=['POST'])
def handle_highlighted_text_summarization_request():
    data = request.json
    text = data.get('text')

    summarized_text = summarize_text(text)
    return {"summarized_text": summarized_text}

if __name__=="__main__":
    app.run(debug=True)
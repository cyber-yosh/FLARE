from openai import OpenAI
#from transcript import get_video_summary
#import asyncio
#import websockets

client = OpenAI(
    api_key="OPENAI_API_KEY",
)

def summarize_highlighted_text():
    text = "https://drive.google.com/drive/u/0/search?q=.png, describe this image"
    response = client.chat.completions.create(
        model="gpt-4-0125-preview",
        messages=[
            {
                "role": "user",
                "content": text
            }
        ],
        temperature=1,
        max_tokens=4,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(response.choices[0].message.content)

summarize_highlighted_text()

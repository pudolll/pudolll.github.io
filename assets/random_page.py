import random

# Function to generate random HTML content
def generate_random_html_page():
    # Lists of random content
    paragraphs = [
        "たけしんぶりょさけにんとすらほげみりょんでかいちゃぶだいかみそすまし。",
        "ねこねこぴろしきずんちゃずんちゃふんふんたぬきちまるひょろりん。",
        "しゅるしゅるぱたぱたびょんびょんかんかんほわんわんこすもぐらんど。",
        "すぱげってぃうどんぱんやきそばみそらーめんぷるぷるもちゃもちゃ"
    ]
    titles = paragraphs
    images = ["cute0.png", "cute1.png", "cute2.png", "checkers.png", "epic.gif", "void.png"]
    lists = [
        ["もうすぐ、あなたの後ろに立っている", "闇はあなたを見ている。", "声が聞こえるでしょう?", "かんかかんかかんかかんか"],
        ["すぱげってぃうどんぱすぱげってぃうどんぱすぱげってぃうどんぱ", "もうすぐ、あなたの後ろに立っている", "かんかかんか", "かんかかんかかんかかんか"],
        ["すぱげってぃうどんぱすぱげってぃうどんぱすぱげってぃうどんぱすぱげってぃうどんぱ", "すぱげってぃうどんぱ", "もうすぐ、あなたの後ろに立っている"]
    ]
    colors = ["black"]
    
    # Define the number of chaotic elements to generate (large number to fill the screen)
    num_elements = 100  # Adjust this number as needed for more/less chaos
    
    elements = []

    for _ in range(num_elements):
        # Randomly select the type of element to add
        element_type = random.choice(['title', 'paragraph', 'image', 'list'])
        
        # Random position, rotation, and color
        top = random.uniform(0, 100)
        left = random.uniform(0, 100)
        rotation = random.uniform(-45, 45)
        color = random.choice(colors)
        width = random.randint(50, 300)
        height = random.randint(50, 300)

        if element_type == 'title':
            title = random.choice(titles)
            elements.append(f"<div style='position: absolute; top: {top}%; left: {left}%; transform: rotate({rotation}deg); color: {color};'><h1>{title}</h1></div>")
        
        elif element_type == 'paragraph':
            paragraph = random.choice(paragraphs)
            elements.append(f"<div style='position: absolute; top: {top}%; left: {left}%; width: {width}px;'><p>{paragraph}</p></div>")
        
        elif element_type == 'image':
            image = random.choice(images)
            elements.append(f"<div style='position: absolute; top: {top}%; left: {left}%;'><img src='{image}' style='width: {width}px; height: auto; transform: rotate({rotation}deg);'></div>")
        
        elif element_type == 'list':
            list_items = ''.join(f'<li>{item}</li>' for item in random.choice(lists))
            elements.append(f"<div style='position: absolute; top: {top}%; left: {left}%;'><ul>{list_items}</ul></div>")
    
    # Generate chaotic HTML content
    chaotic_layout = "\n".join(elements)
    bg_color = random.choice(colors)

    # Create the HTML page content
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{title}</title>
        <style>
            body {{
                background-color: {bg_color};
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                color: white;
                overflow: hidden;
            }}
            h1 {{
                color: white;
            }}
            ul {{
                list-style-type: square;
            }}
            img {{
                display: block;
                margin: 20px 0;
            }}
        </style>
    </head>
    <body>
        {chaotic_layout}
    </body>
    </html>
    """
    
    # Save the generated HTML to a file
    with open("chaotic_page_filled.html", "w") as file:
        file.write(html_content)
    
    print("Chaotic HTML page filled with items generated: chaotic_page_filled.html")

# Run the function to generate the HTML page
generate_random_html_page()

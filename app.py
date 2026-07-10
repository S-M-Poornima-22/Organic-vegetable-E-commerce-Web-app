from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():                               #grab user message
    user_data = request.json
    user_message = user_data.get("message", "").lower()
    
     # response message
    if "hello" in user_message or "hi" in user_message or "vanakkam" in user_message:
        bot_response = "Vanakkam! Welcome to Organic Shop. How can I help you today?"
        
    elif "delivery" in user_message or "shipping" in user_message or "chennai" in user_message:
        bot_response = "We provide Free Shipping across Chennai for all orders above ₹500!"
        
    elif "tomato" in user_message:
        bot_response = "Fresh organic Tomatoes are available at ₹30 for 250g."
        
    elif "onion" in user_message:
        bot_response = "Organic Onions are priced at ₹40 for 250g. Very fresh stock!"
        
    elif "health" in user_message or "recommend" in user_message:
        bot_response = "You can use our Health Recommendation system on the webpage to find foods tailored for Diabetes, BP, or Weight Loss!"
        
    elif "greens" in user_message or "keerai" in user_message:
        bot_response = "We have fresh Moringa, Manathakkali, and Mulai keerai starting from just ₹25!"
        
    else:
        bot_response = "I am your Organic Store Assistant. You can ask me about item prices, delivery updates, or health tips!"

    # response back to the browser
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)
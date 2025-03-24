**DT-16 Sentiment Analysis for Financial News**
This repository contains a Sentiment Analysis project for financial news headlines using Flask, Scikit-learn, and NLTK. The application processes news headlines, analyzes their sentiment, and classifies them as positive, negative, or neutral.

Features
Web-based interface for sentiment analysis.

Pre-trained machine learning model for financial news classification.

Data preprocessing using NLTK (tokenization, stopword removal, stemming).

Flask-based API for sentiment prediction.


**Project Structure**
<pre> ```📁 DT-16-Sentimental-Analysis-for-Financial-News
│── app.py                 # Flask application
│── test.py                # Text preprocessing (Tokenization, Stopwords removal, Stemming)
│── requirements.txt       # Required dependencies
│── index.html             # Main webpage for input
│── predict.html           # Sentiment result page
│── model.pickle           # Pre-trained sentiment analysis model
│── vectorizer.pickle      # Vectorizer for text transformation
│── all-data.csv           # Dataset used for training
│── nlp.ipynb              # Jupyter notebook for NLP processing
│── README.md              # Project documentation ``` </pre>


**Installation**
1. Clone the Repository
   <pre>``` git clone https://github.com/your-username/DT-16-Sentimental-Analysis-for-Financial-News.git
cd DT-16-Sentimental-Analysis-for-Financial-News <pre>  ``` </pre>


2. Create a Virtual Environment (Optional)
  <pre>``` python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate ```</pre>

3. Install Dependencies

  <pre>``` pip install -r requirements.txt </pre>```
**Running the Application**
<pre>```  python app.py ```</pre>
  
The app will be accessible at: http://127.0.0.1:5050/

**How It Works**
Open the web application.

Enter a financial news headline.

Click "Analyze" to get sentiment classification.

Technologies Used
Python

Flask

NLTK

Scikit-learn

HTML/CSS (for UI)

Contributing
Feel free to fork this repository, make improvements, and submit a pull request.

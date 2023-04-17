import os
from flask import Flask, render_template
import cv2
import requests

import base64
from fastapi import FastAPI
from pydantic import BaseModel
import matplotlib.pyplot as plt
import numpy as np
import cv2
import json


app = Flask(__name__,template_folder="templates")

@app.route('/')
def template():
    return render_template("index.html")    

@app.route('/data.html')
def home_path():
    return render_template("data.html")

@app.route('/about_us.html')
def CalElectic():
    return render_template("about_us.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0",port="8081")
#!/usr/bin/env python
# coding: utf-8

# In[1]:


import tensorflow as tf
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


# In[2]:

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

from tensorflow.keras.models import model_from_json
from sys import argv

im = argv[1]

# In[3]:


# load json and create model
json_file = open('model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()
loaded_model = model_from_json(loaded_model_json)
# load weights into new model
loaded_model.load_weights("model.h5")
#print("Loaded model from disk")


# In[4]:


from tensorflow.keras.preprocessing.image import img_to_array
import PIL.Image as Image


# In[5]:



imagen = Image.open(im).resize((64,64))
imagen=np.array(imagen)


# In[6]:


result = loaded_model.predict(imagen[np.newaxis, ...])


# In[8]:


print(result[0][0])


# In[ ]:





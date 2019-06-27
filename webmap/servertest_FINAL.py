import urllib.request
import os.path
import time
import requests
import json
import sys
import psycopg2

from flask import Flask, render_template,g,request,send_file
from flask_cors import CORS




app = Flask(__name__, template_folder='.')
CORS(app)
@app.route("/")
def hello():
    return "Hello World!"

@app.route("/api", methods=['GET', 'POST'])

def api():
        
    fname = "forecast.json"
    
    if os.path.isfile(fname) and (time.time()-os.path.getmtime(fname))<3600:
            total_time=time.time()-os.path.getmtime(fname)
            quote="file already there"
            return send_file(fname, attachment_filename=fname)
        
    else:
        url = "http://api.openweathermap.org/data/2.5/forecast?id=2618425&&APPID=721fe25c65519c755e6f3c2c98286097"
        downloaded = render_template(urllib.request.urlretrieve(url, fname))
        return send_file(fname, attachment_filename=fname)


@app.route("/gas/30")
def gas30():

  
    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs30mm
    WHERE ST_CONTAINS(bs30mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2

@app.route("/gas/40")
def gas40():

   
    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs40mm
    WHERE ST_CONTAINS(bs40mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

        #amenity = data[1]
        #coords = json.dumps(data[1]).split("]")[0]
        #gascoords = coords.split("[")[-1]
        #print (row)
        #print (row[1].split("]")[0])
        # print(row[1].split("[")[-1])
        # print(json.dumps(data[1]).split("]")[0])
        #data=row[1].split("]")[0]
        #print (data)
        #print ((json.dumps(i).split("]")[0]).split("[")[-1]) #right one
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
        #print (x)
        #response.append(x)
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
        #response.append(((json.dumps(i).split("]")[0]).split("[")[-1]))
        #print (amenity)
        #print (gascoords)
        #print (response)
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
        #print(s)
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2
        
@app.route("/gas/50")
def gas50():

    
    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs50mm
    WHERE ST_CONTAINS(bs50mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2

@app.route("/gas/60")
def gas60():

  
    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs60mm
    WHERE ST_CONTAINS(bs60mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2


@app.route("/gas/70")
def gas70():

  
    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs70mm
    WHERE ST_CONTAINS(bs70mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2

@app.route("/gas/80")
def gas80():

 
    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs80mm
    WHERE ST_CONTAINS(bs80mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2

@app.route("/gas/90")
def gas90():

    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs90mm
    WHERE ST_CONTAINS(bs90mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2

@app.route("/gas/100")
def gas100():

    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs100mm
    WHERE ST_CONTAINS(bs100mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2

@app.route("/gas/110")
def gas110():

    lat = request.args.get('lat')
    lng = request.args.get('lng')


    conn = psycopg2.connect(dbname='fuel_stations',
                            host='localhost',
                            user='postgres',
                            password='postgres')

    cur = conn.cursor()

    cur.execute("""SELECT gasstations.amenity, ST_AsGeoJSON(gasstations.geom)
    FROM gasstations, bs110mm
    WHERE ST_CONTAINS(bs110mm.geom,gasstations.geom);""")

    data=cur.fetchall()

    row=0
    i=0
    x=[]
    response=[]
    count=0
    for row,i in data:

       
        x.append((json.dumps(i).split("]")[0]).split("[")[-1]) 
       
        response.append(' { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ '+((json.dumps(i).split("]")[0]).split("[")[-1])+' ] }}')
       
        count=count+1
        y=tuple(response)
        s = ','.join(response) 
      
    
    str1 =""" {"type": "FeatureCollection","name": "gasstations_CPH","crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },"features": ["""
    str2 = "]}"
    newstr1 = " ".join((str1, s)) 
    newstr2 = " ".join((newstr1,str2))
    
    print(newstr2)

    cur.close()
    conn.close()
    
   
    return newstr2
        

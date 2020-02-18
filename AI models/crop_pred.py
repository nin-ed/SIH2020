import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import accuracy_score
from firebase import firebase

data=pd.read_csv('C:/Users/Edwin/PycharmProjects/MLSIH2.0/csv_files/field_data.csv')

label = pd.get_dummies(data.label).iloc[: , 1:]
data = pd.concat([data,label],axis=1)
data.drop('label', axis=1,inplace=True)
# print('The data present in one row of the dataset is')
train = data.iloc[:, 0:4].values
test = data.iloc[: ,4:].values

X_train, X_test, y_train, y_test = train_test_split(train,test,test_size=0.3)

sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

clf = DecisionTreeRegressor()
clf.fit(X_train,y_train)
pred = clf.predict(X_test)

a = accuracy_score(y_test, pred)
print("The accuracy of this model is: ", a*100)

firebase = firebase.FirebaseApplication('https://predict-crops.firebaseio.com')
val = firebase.get('/Realtime',None)

air_h = val['Air Humidity']
air_temp = val['Air Temperature']
soil_h = val['Soil Humidity']
soil_ph = val['Soil pH']
rain = val['Rainfall']
print(f"\nAir Humidity: {air_h} \t Air Temperature: {air_temp} \t Soil Humidity: {soil_h} \t Soil pH: {soil_ph} \t Rainfall: {rain}")


l = []
l.append(air_h)
l.append(air_temp)
l.append(soil_ph)
l.append(rain)
predictcrop = [l]

# Putting the names of crop in a single list
crops = ['wheat', 'mungbean', 'Tea', 'millet', 'maize', 'lentil', 'jute', 'coffee', 'cotton', 'ground nut', 'peas', 'rubber', 'sugarcane', 'tobacco','kidney beans','moth beans','coconut','blackgram','adzuki beans','pigeon peas','chick peas','banana','grapes','apple','mango','muskmelon','orange','papaya','watermelon','pomegranate']
cr = 'rice'

#Predicting the crop
predictions = clf.predict(predictcrop)
count=0
for i in range(0,30):
    if(predictions[0][i]==1):
        c=crops[i]
        count=count+1
        break;
    i=i+1
if(count==0):
    print('The predicted crop is %s'%cr)
else:
    print('The predicted crop is %s'%c)

#Sending the predicted crop to database
cp = firebase.put('predicted_crops','crop',c)

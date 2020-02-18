import pandas as pd
from sklearn import preprocessing
from keras.models import Sequential
from keras.optimizers import SGD
from keras.layers import Dense

df = pd.read_csv("C:/Users/Edwin/PycharmProjects/MLSIH2.0/csv_files/op.csv")

le = preprocessing.LabelEncoder()
l1 = df["Soil"]
le.fit(l1)
newsoil = le.transform(l1)
df["Soil"]=newsoil

l2 = df["Month"]
le.fit(l2)
df["Month"]=le.transform(l2)

l3 = df["State"]
le.fit(l3)
df["State"]=le.transform(l3)

df = pd.DataFrame(data = df.iloc[:,:].values, columns=["Soil","Month","State","Rice","Wheat","Cotton","Sugarcane","Tea","Coffee","Cashew","Rubber","Coconut","Oilseed","Ragi","Maize","Groundnut","Millet","Barley"])
feat = pd.DataFrame({"Soil": df["Soil"], "Month" : df["Month"], "State": df["State"]})
labels = pd.DataFrame(data=df.iloc[:,3:],columns=["Rice","Wheat","Cotton","Sugarcane","Tea", "Coffee","Cashew","Rubber","Coconut","Oilseed","Ragi","Maize","Groundnut","Millet","Barley"])
from sklearn.model_selection import train_test_split

(trainData, testData, trainLabels, testLabels) = train_test_split(feat, labels, test_size=0.25, random_state=42)
print(trainData.values)
model = Sequential()
model.add(Dense(15, input_dim=3, init="uniform",activation="sigmoid"))
"""
model.add(Dense(10, input_dim=3, init="uniform",activation="relu"))
print(model.output)
model.add(Dense(15, init="uniform", activation="relu"))
print(model.output)
model.add(Activation("sigmoid"))
print(model.output)
print(model.summary())
"""
#trainLabels = trainLabels.reshape((-1, 1))
print(trainData.shape, testData.shape, trainLabels.shape, testLabels.shape)

sgd = SGD(lr=0.01)
model.compile(loss="binary_crossentropy", optimizer=sgd, metrics=["accuracy"])
model.fit(trainData.values, trainLabels.values, epochs=500, batch_size=10, verbose=1)

(loss, accuracy) = model.evaluate(testData.values, testLabels.values,	batch_size=40, verbose=1)

print("[INFO] loss={:.4f}, accuracy: {:.4f}%".format(loss,accuracy * 100))

pred = model.predict_proba(testData.values)
df = pd.DataFrame(pred, columns=["Rice","Wheat","Cotton","Sugarcane","Tea",	"Coffee","Cashew","Rubber","Coconut","Oilseed","Ragi","Maize","Groundnut","Millet","Barley"])
print(df.idxmax(axis=1))
print(df)

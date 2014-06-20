import json
import requests
import pprint

def test_parse_print():
    resp = requests.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/rxneggroll?api_key=5ea162cb-a47a-4515-b12d-bcd27e1ac3ae")
    print(resp.text) #prints {"rxneggroll":{"id":25729367,"name":"RxN EggRoll","profileIconId":19,"summonerLevel":30,"revisionDate":1403028570000}}
    temp = json.loads(resp.text)
    print(temp["rxneggroll"]["name"]) #prints "RxN Eggroll"
    print(temp["rxneggroll"]["id"])
    

    #this works fine
    jsonInput = {'hotshotgg': {'id': 407750,
               'name': 'HotshotGG',
               'profileIconId': 621,
               'revisionDate': 1403045763000,
               'summonerLevel': 30}}
    print(jsonInput['hotshotgg']['name']) #Prints "HotshotGG"

    resp1 = requests.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/rxntheary101?api_key=5ea162cb-a47a-4515-b12d-bcd27e1ac3ae")
    temp1 = json.loads(resp1.text)
    print(temp1["rxntheary101"]["name"]) #prints "RxN theary101"

    thearyid = temp1["rxntheary101"]["id"]
    print(thearyid)
    rofl = requests.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + str(thearyid) + "/runes?api_key=5ea162cb-a47a-4515-b12d-bcd27e1ac3ae")
    lmfao = json.loads(rofl.text)
    thearyname = "rxntheary101"
    thearyresp = requests.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + thearyname + "?api_key=5ea162cb-a47a-4515-b12d-bcd27e1ac3ae")
    thearytemp = json.loads(thearyresp.text)
    print(thearytemp[thearyname]["name"] + "'s rune page names: ")
    for x in range(0, 3):
        print("     " + lmfao[str(thearyid)]["pages"][x]["name"])
  
    resp2 = requests.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/rxnbpafho?api_key=5ea162cb-a47a-4515-b12d-bcd27e1ac3ae")
    temp2 = json.loads(resp2.text)
    print(temp2["rxnbpafho"]["name"]) #prints "RxN bpafho"

    resp3 = requests.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/HotshotGG?api_key=a3fe81d6-1dbc-4b3b-9155-0064a9a76fbe")
    temp3 = json.loads(resp3.text)
    print(temp3["hotshotgg"]["id"])

    eggroll = temp["rxneggroll"]["id"]
    resp4 = requests.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + str(eggroll) + "/runes?api_key=5ea162cb-a47a-4515-b12d-bcd27e1ac3ae")
    temp4 = json.loads(resp4.text)
    for i in range(0, 5):
      print(temp4["25729367"]["pages"][i]["name"]) #ROFLNIGGERZ, etc



test_parse_print()

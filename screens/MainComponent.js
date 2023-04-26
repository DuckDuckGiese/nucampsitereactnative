import { useState } from "react";
import { CAMPSITES } from "../shared/campsites";
import DirectoryScreen from "./DirectoryScreen"
import { View } from "react-native";
import CampsiteInfoScreen from "./CampsiteInfoScreen";

const Main = () => {
    const [campsites, setCampsites] = useState(Campsites);
    const [selectedCampsiteId, setSelectedCampsiteId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <directoryScreen 
                campsites={campsites} 
                onPress={(campsiteID) => setSelectedCampsiteId(campsiteId)}
                />
                <CampsiteInfoScreen
                    campsite={
                        campsites.filter(
                            (campsite) => campsite.id === setSelectedCampsiteId
                        )[0]
                    }
                />
        </View>
    );
}

export default Main;
import Font from '@/constants/Font'
import FontSize from '@/constants/FontSize'
import Spacing from '@/constants/Spacing'
import { Colors } from '@/constants/theme'
import { tags } from "@/data"
import { Octicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Index = () => {

    const[activeTag,setActivetag] = useState(null)

return (

<SafeAreaView>
<View style={{ paddingHorizontal: Spacing * 2}}>
<View style={{ flexDirection:"row", justifyContent:"space-between" }}>

<TouchableOpacity style={{ height: Spacing * 5, width: Spacing * 5, backgroundColor: Colors.dark.background, alignItems:"center", justifyContent:"center", borderRadius: Spacing * 3,}}>
<Octicons name="apps" size={24} color={Colors.dark.icon}/>
</TouchableOpacity>

<TouchableOpacity onPress={()=> setActivetag(null) }style={{ height: Spacing * 5, width: Spacing * 5, backgroundColor: Colors.dark.background, alignItems:"center", justifyContent:"center", borderRadius: Spacing * 3,}}>
<Octicons name="search" size={24} color={Colors.dark.icon}/>   
</TouchableOpacity>
</View>

<View style={{marginVertical: Spacing * 2}}>
<Text style={{fontSize:FontSize.xxLarge, fontFamily:Font["poppins-bold"],width:"70%"}}>I Protect My Humble Home</Text>
<Text style={{fontSize:FontSize.small, fontFamily:Font["poppins-regular"],width:"70%"}}>Im tell you that</Text>
</View>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {tags.map((tag) =>(
        <TouchableOpacity style={{ 
            backgroundColor:Colors.light.background,
            paddingVertical:Spacing* 2,
            marginHorizontal: Spacing * 2,
            paddingHorizontal: Spacing * 3,
            borderRadius: Spacing * 5,}}
            key = {tag.id}
            >
                <Text style ={{ fontSize: FontSize.large, fontFamily:Font["poppins-semiBold"]}}>{tag.title}</Text>
            
        </TouchableOpacity>
    ))}
</ScrollView>
</View> 
</SafeAreaView>

)
}

export default Index
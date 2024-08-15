import { View, ScrollView, TouchableOpacity,Image,Text } from 'react-native'
import { React, } from 'react'
import {  categotyData } from '../constants/index'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { CachedImage } from '../helpers/image';

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat, index) => {
          let isActive = cat.strCategory == activeCategory;
          let activeButtonClass = isActive ? "bg-amber-400" : "bg-black/10";
          return (
            <TouchableOpacity
              key={index}
              className=" flex space-y-1 items-center "
              onPress={() => handleChangeCategory(cat.strCategory)}
            >
              <View className={`rounded-full p-[6px]" ` + activeButtonClass}>
                <CachedImage
                  uri={  cat.strCategoryThumb }
                  style={{ width: hp(6), height: hp(6), margin: 4 }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" style={{ fontSize: hp(1.5) }}>
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}  
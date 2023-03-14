/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react';
import {
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getListPlaceholder} from '../../actions';
import styles from './styles';
import Section from './section';

function Home({navigation}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const {
    getListPlaceholderResult,
    getListPlaceholderLoading,
    getListPlaceholderError,
  } = useSelector(state => ({
    getListPlaceholderResult: state.getListPlaceholder.result,
    getListPlaceholderLoading: state.getListPlaceholder.loading,
    getListPlaceholderError: state.getListPlaceholder.error,
  }));
  const prevGetListPlaceholderResult = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    loadData(0);
  }, []);

  useEffect(() => {
    if (
      getListPlaceholderResult &&
      getListPlaceholderResult !== prevGetListPlaceholderResult.current
    ) {
      if (data && data.length !== 0) {
        setData([...data, ...getListPlaceholderResult]);
      } else {
        setData(getListPlaceholderResult);
      }
    }
    prevGetListPlaceholderResult.current = getListPlaceholderResult;
  }, [getListPlaceholderResult, data]);

  const loadData = async pageModified => {
    dispatch(getListPlaceholder({page: pageModified}));
  };
  const handleEndReached = useCallback(() => {
    loadData(page + 10);
    setPage(page + 10);
  }, [loadData, page, setPage]);

  const renderFooter = useMemo(() => {
    return getListPlaceholderLoading ? (
      <ActivityIndicator
        size="large"
        style={styles.activityIndicator}
      />
    ) : null;
  }, [getListPlaceholderLoading]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      {data && data.length !== 0 && (
        <FlatList
          data={data}
          extraData={data}
          renderItem={({item, index}) => {
            return (
              <Section
                navigation={() => {
                  navigation.navigate('Description', {data: item});
                }}
                key={item.id}
                data={item}
              />
            );
          }}
          keyExtractor={item => item.id}
          onEndReached={() => handleEndReached()}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{alignSelf: 'center'}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}



export default Home;

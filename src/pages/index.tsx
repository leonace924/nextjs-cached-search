import { Layout, Title, View } from '@components/Common';
import { ErrorView, GodSearch } from '@components/Pages/Home';

const Home = () => {
  return (
    <Layout>
      <View className="container px-4 py-12 mx-auto lg:px-8 lg:py-20">
        <Title className="text-4xl font-bold text-center text-primary lg:text-6xl">
          Cached Search God
        </Title>
        <View className="pt-9 lg:pt-14">
          <GodSearch />
        </View>

        <ErrorView />
      </View>
    </Layout>
  );
};

export default Home;

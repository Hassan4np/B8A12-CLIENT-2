
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useQuery } from 'react-query';
import useAxousSecret from '../Hools/useAxousSecret';

const Feedback = () => {
    const axospublic = useAxousSecret();
    const { data: review, isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axospublic.get(`/review`);
            console.log(res.data);
            return res.data

        }
    })
    return (
        <div className="mt-10 mb-10">
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    review?.slice(0,3)?.map(item => <SwiperSlide className="px-16" key={item._id}>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={item.reviewerimg} />
                                </div>
                            </div>
                            <p className="text-enter font-medium text-black text-base">{item.reviewername}</p>
                            <h6 className="text-center text-lg">{item.title}</h6>
                            <p className="text-center text-gray-500 text-base">{item.dec}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Feedback;
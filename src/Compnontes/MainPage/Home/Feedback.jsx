
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
                    review?.map(item => <SwiperSlide className="px-16" key={item._id}>
                        <div className="text-center">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <p className="text-enter">{item.reviewername}</p>
                            <h5 className="text-center">{item.title}</h5>
                            <h5 className="text-center">{item.dec}</h5>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Feedback;
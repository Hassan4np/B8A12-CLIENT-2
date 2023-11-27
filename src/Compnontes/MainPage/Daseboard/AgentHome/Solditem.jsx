

const Solditem = () => {
    const axoussec = useAxousSecret();
    const { user } = useAuth();
    const { data, refetch } = useQuery({
        queryKey: ['advertisement/agent', user.email],
        queryFn: async () => {
            const res = await axoussec.get(`/advertisement/agent/${user.email}`);
            console.log(res.data)
            return res.data
        }
    });
    return (
        <div>
            
        </div>
    );
};

export default Solditem;
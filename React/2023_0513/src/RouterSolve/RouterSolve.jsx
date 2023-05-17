import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation,
    Outlet,
    useParams,
} from "react-router-dom";

function RouterResolve() {
    const productIds = [1, 2, 3, 4, 5];
    return (
        <BrowserRouter>
            <h1>Quiz</h1>
            <Link to="/">홈페이지</Link>
            {productIds.map((productId) => (
                <Link to={`/products/${productId}`}>상품{productId}</Link>
            ))}
            <Link to="/cart">카트</Link>
            <Link to="/users/">유저스</Link>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:id" element={<Products />} />
                <Route
                    path="/products/:id/notice"
                    element={<ProductNotice />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/users/" element={<Users />}>
                    <Route path="coupon" element={<p>쿠펀</p>} />
                    <Route path="question" element={<p>퀘스챤</p>} />
                    <Route path="notice" element={<p>노티쓰</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function HomePage() {
    return <h1>홈페이지임니다</h1>;
}

function Cart({ name }) {
    return <h1>카트임니다</h1>;
}

function Users() {
    return (
        <>
            <h1>여기는 유저쓰</h1>
            <Link to="/users/coupon">쿠폰</Link>
            <Link to="/users/notice">공지</Link>
            <Link to="/users/question">질문</Link>
            <Outlet />
        </>
    );
}

function Products() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>안녕 프로덕트스</h1>
            <Link to="./notice">Notice</Link>
        </div>
    );
}

function ProductNotice() {
    const location = useParams();
    console.log(location);
    return <h1>안녕 프로덕트스 {location.id}노티스야</h1>;
}


export default RouterResolve;

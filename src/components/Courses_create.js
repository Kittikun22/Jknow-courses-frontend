import Axios from 'axios';
import React, { useState } from 'react'


function Courses_create() {
    // id,name,access,detail,vdo,pic
    const [course_name, setCourse_name] = useState();
    const [course_access, setCourse_access] = useState();
    const [course_detail, setCourse_detail] = useState();
    const [course_vdo, setCourse_vdo] = useState();
    const [course_pic, setCourse_pic] = useState();


    const CreateCourse = () => {
        Axios.post('http://localhost:3001/create-course', {
            courses_name: course_name,
            courses_access: course_access,
            courses_detail: course_detail,
            courses_vdo: course_vdo,
            courses_pic: course_pic
        })
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Register Successfully.
                </Alert>
            </Snackbar>
            <Stack spacing={2} sx={{ p: 5 }}>
                <Box sx={{ textAlign: 'center' }} component='form'>
                    <h1>สมัครสมาชิก</h1>
                    <Box>
                        <TextField type="text" label="เบอร์โทรศัพท์" variant="standard" onChange={(e) => { setTel(e.target.value) }} />
                    </Box>
                    <Box>
                        <TextField type="password" label="รหัสผ่าน" variant="standard" onChange={(e) => { setPassword(e.target.value) }} />
                    </Box>

                    <Box>
                        <Button type='submit' variant="contained" color='success' startIcon={<SendIcon />} onClick={CreateUser} >
                            สมัครสมาชิก
                        </Button>
                    </Box>
                </Box>
            </Stack>
            <Container>
                <h1 className='text-center p-3'>สมัครสมาชิก</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTel">
                        <Form.Label>ชื่อคอร์สเรียน</Form.Label>
                        <Form.Control type="text" placeholder="กรอกชื่อคอร์สเรียน" onChange={(e) => { setCourse_name(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>รูปภาพ</Form.Label>
                        <Form.Control type="text" placeholder="กรอกรหัสผ่าน" onChange={(e) => { setCourse_pic(e.target.value) }} />
                        <Form.Text className="text-muted">
                            "../img/picName.jpg"
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>รายละเอียดคอร์สเรียน</Form.Label>
                        <Form.Control type="text" placeholder="กรอกรายละเอียดคอร์สเรียน" onChange={(e) => { setCourse_detail(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>วิดีโอการสอน</Form.Label>
                        <Form.Control type="text" placeholder="กรอกรหัสผ่าน" onChange={(e) => { setCourse_vdo(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>สิทธิ์การเข้าถึง</Form.Label>
                        <Form.Control type="text" placeholder="กำหนดสิทธิ์การเข้าถึง" onChange={(e) => { setCourse_access(e.target.value) }} />
                    </Form.Group>


                    <Button className='btn btn-primary mb-3' type="submit" onClick={CreateCourse}>สร้างคอร์ส</Button>
                </Form>

            </Container>
            <Footer />
        </>
    )
}

export default Courses_create
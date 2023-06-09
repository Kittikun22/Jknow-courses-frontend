import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField, Checkbox, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function StepThree() {
  const { register } = useFormContext();

  const [roleSelect, setRoleSelect] = useState(null);
  const [grade, setGrade] = useState('');
  const [province, setProvince] = useState('');
  const [parentJob, setParentJob] = useState('');
  const [expectation, setExpectation] = useState('');


  const [openModal, setOpenModal] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpenModal = (scrollType) => () => {
    setOpenModal(true);
    setScroll(scrollType);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <>

      <RadioGroup
        row
        value={roleSelect}
        onChange={(e) => { setRoleSelect(e.target.value) }}
      >
        <FormControlLabel {...register('user_role')} value="นักเรียน" control={<Radio />} label="นักเรียน" />
        <FormControlLabel {...register('user_role')} value="ผู้ปกครอง" control={<Radio />} label="ผู้ปกครอง" />
        <FormControlLabel {...register('user_role')} value="คุณครู" control={<Radio />} label="คุณครู" />
      </RadioGroup>

      <TextField
        {...register('fname')}
        id="fname"
        label="ชื่อ"
        variant="outlined"
        size='small'
        sx={{ display: roleSelect === null ? 'none' : 'flex' }}
      />
      <TextField
        {...register('lname')}
        id="lname"
        label="นามสกุล"
        variant="outlined"
        size='small'
        sx={{ display: roleSelect === null ? 'none' : 'flex' }}

      />
      <TextField
        {...register('email')}
        type='email'
        id="email"
        label="อีเมล"
        variant="outlined"
        size='small'
        sx={{ display: roleSelect === null ? 'none' : 'flex' }}

      />
      <FormControl
        sx={{ display: roleSelect === 'ผู้ปกครอง' ? 'flex' : 'none' }}
      >
        <InputLabel>อาชีพ</InputLabel>
        <Select
        {...register('parentJob')}
          id="parentJob"
          label='อาชีพ'
          size='small'
          value={parentJob}
          onChange={(e) => { setParentJob(e.target.value) }}
        >
          <MenuItem value='รับราชการ'>รับราชการ</MenuItem>
          <MenuItem value='พนักงานเอกชน'>พนักงานเอกชน</MenuItem>
          <MenuItem value='ธุรกิจส่วนตัว'>ธุรกิจส่วนตัว</MenuItem>
          <MenuItem value='ค้าขาย'>ค้าขาย</MenuItem>
          <MenuItem value='อาชีพอิสระ'>อาชีพอิสระ</MenuItem>
          <MenuItem value='อื่นๆ'>อื่นๆ</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{ display: roleSelect === null ? 'none' : 'flex' }}
      >
        <InputLabel>ระดับชั้น</InputLabel>
        <Select
          {...register('grade')}
          id="grade"
          label='ระดับชั้น'
          size='small'
          value={grade}
          onChange={(e) => { setGrade(e.target.value) }}

        >
          <MenuItem value='มัธยมศึกษาปีที่ 6'>มัธยมศึกษาปีที่ 6</MenuItem>
          <MenuItem value='มัธยมศึกษาปีที่ 5'>มัธยมศึกษาปีที่ 5</MenuItem>
          <MenuItem value='มัธยมศึกษาปีที่ 4'>มัธยมศึกษาปีที่ 4</MenuItem>
          <MenuItem value='มัธยมศึกษาปีที่ 3'>มัธยมศึกษาปีที่ 3</MenuItem>
          <MenuItem value='มัธยมศึกษาปีที่ 2'>มัธยมศึกษาปีที่ 2</MenuItem>
          <MenuItem value='มัธยมศึกษาปีที่ 1'>มัธยมศึกษาปีที่ 1</MenuItem>
        </Select>
      </FormControl>

      <TextField
        {...register('school')}
        id="school"
        variant="outlined"
        label="โรงเรียน"
        size='small'
        sx={{ display: roleSelect === null ? 'none' : 'flex' }}

      />

      <FormControl
        sx={{ display: roleSelect === null ? 'none' : 'flex' }}
      >
        <InputLabel>จังหวัด</InputLabel>
        <Select
          {...register('province')}
          id="province"
          label='จังหวัด'
          size='small'
          value={province}
          onChange={(e) => { setProvince(e.target.value) }}
        >
          <MenuItem value='กรุงเทพมหานคร'>กรุงเทพมหานคร</MenuItem>
          <MenuItem value='ขอนแก่น'>ขอนแก่น</MenuItem>
          <MenuItem value='สกลนคร'>สกลนคร</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{ display: roleSelect === null ? 'none' : 'flex' }}
      >
        <InputLabel>ความคาดหวัง</InputLabel>
        <Select
          {...register('expectation')}
          id="expectation"
          label='ความคาดหวัง'
          size='small'
          value={expectation}
          onChange={(e) => { setExpectation(e.target.value) }}
        >
          <MenuItem value='สอบเข้ามหาวิทยาลัย'>สอบเข้ามหาวิทยาลัย</MenuItem>
          <MenuItem value='ทบทวนบทเรียน'>ทบทวนบทเรียน</MenuItem>
          <MenuItem value='เพิ่มผลการเรียน'>เพิ่มผลการเรียน</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ display: roleSelect === null ? 'none' : 'flex', alignItems: 'center' }}>
        <FormControlLabel
          {...register('termCondition')}
          value="ยอมรับ"
          control={<Checkbox />}
          labelPlacement="end"

        />
        <span onClick={handleClickOpenModal('paper')}>ยอมรับข้อตกลงและเงื่อนไข</span>
      </Box>


      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">ข้อตกลงและเงื่อนไข</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            ข้อตกลงระหว่างท่านและบริษัท<br />
            เว็บไซต์ของบริษัทอาจประกอบด้วยเว็บไซต์หรือเว็บเพจต่างๆ ที่ดำเนินการโดยบริษัท ซึ่งมีสำนักงานใหญ่ตั้งอยู่เลขที่ 801 ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กทม. 10110 (เว็บไซต์และเว็บเพจทั้งหมดนี้จะรวมเรียกว่า "เว็บไซต์ของบริษัท") การใช้งานเว็บไซต์ของบริษัทอยู่ภายใต้เงื่อนไขว่าท่านจะต้องตกลงและยอมรับข้อตกลงการใช้งานเว็บไซต์นี้ โดยไม่แก้ไขประการใดทั้งสิ้น การที่ท่านใช้งานเว็บไซต์ของบริษัทย่อมก่อให้เกิดความผูกพันทางกฎหมายตามข้อกำหนดที่ระบุไว้ในข้อตกลงการใช้งานเว็บไซต์ หากท่านไม่ยอมรับข้อตกลงการใช้งานเว็บไซต์นี้ โปรดอย่าเข้าสู่และใช้งานเว็บไซต์ของบริษัท<br />
            <br />
            การแก้ไขเปลี่ยนแปลงข้อตกลงการใช้งานเว็บไซต์นี้<br />
            บริษัทขอสงวนสิทธิที่จะแก้ไขหรือเปลี่ยนแปลงข้อตกลงการใช้งานที่ระบุไว้ในเว็บไซต์นี้ ท่านมีหน้าที่ตรวจสอบข้อตกลงการใช้งานเว็บไซต์นี้ รวมถึงข้อกำหนดเพิ่มเติมใดๆ ที่ระบุไว้ในเว็บไซต์ของบริษัทอย่างสม่ำเสมอ การที่ท่านใช้งานเว็บไซต์ของบริษัทอย่างต่อเนื่องย่อมถือว่าท่านรับทราบและตกลงตามข้อตกลงการใช้งานที่ได้แก้ไขหรือเปลี่ยนแปลงนั้นแล้ว<br />
            <br />
            การใช้และการเปิดเผยข้อมูลส่วนบุคคล<br />
            เว้นแต่กฎหมายที่ใช้บังคับจะกำหนดเป็นอย่างอื่น ท่านตกลงและยอมรับว่าข้อมูลส่วนบุคคลของท่านทั้งหมดที่บริษัทเก็บรวบรวมจากเว็บไซต์ของบริษัทอาจถูกใช้เพื่อประกอบการทำธุรกรรมและ/หรือการใช้บริการของท่าน รวมถึงเพื่อวัตถุประสงค์ในการวิเคราะห์ข้อมูล เสนอ ให้ ใช้ และ/หรือปรับปรุงผลิตภัณฑ์หรือบริการต่างๆ ของบริษัท และ/หรือเพื่อตรวจสอบรายการธุรกรรม รวมทั้งอาจถูกเปิดเผยให้แก่บริษัทในกลุ่มธุรกิจทางการเงิน ผู้สอบบัญชี ผู้ตรวจสอบภายนอก สถาบันการเงิน หน่วยงานราชการ ผู้รับโอนสิทธิเรียกร้อง และ/หรือนิติบุคคลหรือบุคคลใดๆ ที่บริษัทได้รับความยินยอมจากท่านให้เปิดเผยข้อมูลดังกล่าว<br />
            <br />
            โปรดศึกษานโยบายการรักษาความปลอดภัยของบริษัทเพิ่มเติม<br />
            <br />
            การเชื่อมต่อกับเว็บไซต์อื่นๆ<br />
            บริษัทอาจเชื่อมต่อเว็บไซต์นี้กับเว็บไซต์อื่นๆ ที่ไม่ได้อยู่ภายใต้การควบคุมดูแลของบริษัทเพื่อให้ข้อมูลและอำนวยความสะดวกแก่ท่านเท่านั้น การที่ท่านเข้าสู่เว็บไซต์เหล่านั้นย่อมเป็นความเสี่ยงของท่านและบริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้นจากการกระทำของท่านที่เกี่ยวข้องกับข้อมูล สินค้า หรือบริการที่แสดงหรือเสนอบนเว็บไซต์ของบุคคลภายนอกใดๆ ที่เชื่อมต่อกับเว็บไซต์ของบริษัท ไม่ว่าในกรณีใดๆ ทั้งสิ้น ทั้งนี้ บริษัทไม่ให้คำรับประกัน คำรับรองหรือคำแนะนำใดๆ ที่เกี่ยวข้องกับข้อมูล สินค้าหรือบริการใดๆ ที่ปรากฏอยู่บนเว็บไซต์ของบุคคลภายนอกดังกล่าว และบริษัทจะไม่รับผิดชอบต่อความบกพร่องหรือการผิดสัญญาใดๆ ที่เกี่ยวข้องกับสินค้า หรือบริการใดๆ ที่ปรากฏหรือโฆษณาบนเว็บไซต์เหล่านั้น บริษัทไม่มีข้อตกลงหรือสัญญาใดๆ กับเว็บไซต์อื่นดังกล่าวที่เกี่ยวข้องกับข้อตกลงของท่านกับเว็บไซต์อื่นดังกล่าวนั้น<br />
            <br />
            การเชื่อมต่อกับเว็บไซต์อื่นๆ เพื่อดาวน์โหลดซอฟท์แวร์ใดๆ ที่บริษัทจัดให้มีเพื่ออำนวยความสะดวกแก่ท่านเท่านั้น บริษัทจะไม่รับผิดชอบหรือรับผิดต่อความผิดพลาดหรือการทำงานผิดปกติที่เกิดจากหรือเป็นผลมาจากซอฟท์แวร์ที่ท่านได้ดาวน์โหลด ไม่ว่าในกรณีใดๆ ทั้งสิ้น โปรดตระหนักด้วยว่าการใช้ซอฟท์แวร์ที่ท่านได้ดาวน์โหลดจะต้องเป็นไปตามข้อกำหนดและเงื่อนไขของสัญญาอนุญาตให้ใช้สิทธิที่เกี่ยวข้อง หากท่านไม่สามารถปฏิบัติตามสัญญาอนุญาตให้ใช้สิทธิดังกล่าวได้ ท่านอาจถูกถือว่าเป็นผู้ละเมิดลิขสิทธิ์หรือสิทธิในทรัพย์สินทางปัญญาอื่นของผู้ให้บริการซอฟท์แวร์ดังกล่าว ในกรณีเช่นว่านั้น บริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้นแก่ท่านไม่ว่าในกรณีใด โปรดทราบว่าเมื่อท่านได้เชื่อมต่อไปยังกับเว็บไซต์อื่นใดดังกล่าวแล้ว ท่านจะต้องปฏิบัติตามข้อกำหนด เงื่อนไขและนโยบายการใช้บริการเว็บไซต์ที่ท่านได้เข้าไปเยี่ยมชม<br />
            <br />
            การชดใช้ค่าเสียหาย<br />
            ท่านตกลงว่าจะชดใช้ค่าเสียหายให้แก่บริษัทสำหรับข้อเรียกร้อง ความสูญเสีย ค่าใช้จ่าย และความเสียหายใดๆ (รวมถึงค่าธรรมเนียมทางกฎหมายและค่าใช้จ่ายที่เกี่ยวกับศาล) ที่บริษัทต้องรับภาระหรือเกิดขึ้นแก่บริษัท ซึ่งเป็นผลมาจากการใช้งานเว็บไซต์ของบริษัทโดยไม่ถูกต้องเหมาะสมหรือไม่เป็นไปตามข้อตกลงการใช้งานเว็บไซต์นี้ โดยบุคคลอื่นใด ได้นำหมายเลขบัญชีประจำตัวของท่านและ/หรือรหัสลับส่วนตัวของท่าน มาใช้บริการแทน<br />
            <br />
            เครื่องหมายการค้า เครื่องหมายบริการ ลิขสิทธิ์ และสิทธิในทรัพย์สินทางปัญญาอื่นๆ<br />
            ข้อมูลใดๆ ที่ระบุหรือแสดงอยู่บนเว็บไซต์ของบริษัท เป็นทรัพย์สินของบริษัทและของบุคคลภายนอก (แล้วแต่กรณี) เครื่องหมายการค้า เครื่องหมายบริการ ชื่อทางการค้า และสัญลักษณ์ทั้งหมดที่อ้างอิงหรือแสดงอยู่บนเว็บไซต์ของบริษัท (รวมเรียกว่า "เครื่องหมายการค้า") ให้หมายความรวมถึงเครื่องหมายการค้า เครื่องหมายบริการ และสัญลักษณ์ใดๆ ของบริษัทและของบุคคลภายนอก โดยไม่จำต้องคำนึงถึงว่าเครื่องหมายการค้า เครื่องหมายบริการ และสัญลักษณ์ดังกล่าวได้มีการจดทะเบียนไว้แล้วหรือไม่<br />
            <br />
            ไม่มีส่วนหนึ่งส่วนใดของข้อตกลงการใช้งานเว็บไซต์นี้จะถือว่าเป็นการอนุญาตหรือการให้สิทธิในการใช้เครื่องหมายการค้าดังกล่าว บริษัทขอสงวนสิทธิทั้งหมดที่บริษัทอาจมีอันเกี่ยวข้องกับเว็บไซต์นี้ บริษัทไม่อนุญาตหรือให้สิทธิในการใช้ข้อมูลและเครื่องหมายการค้าใดๆ ที่กล่าวข้างต้น เว้นแต่จะได้รับความยินยอมล่วงหน้าเป็นลายลักษณ์อักษรจากบริษัทหรือจากบุคคลภายนอก (แล้วแต่กรณี) เว็บไซต์ของบริษัทได้รับความคุ้มครองตามกฎหมายลิขสิทธิ์ และไม่อาจถูกแก้ไข ทำซ้ำ ทำสำเนา ดาวน์โหลด ส่งผ่าน (ไม่ว่าในรูปแบบใดหรือโดยวิธีการใด) หรือใช้ในลักษณะใดก็ตาม เพื่อวัตถุประสงค์ในทางการค้า เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษรจากบริษัทก่อน<br />
            <br />
            การบอกเลิกข้อตกลง การจำกัดการเข้าใช้งาน และการห้ามใช้งาน<br />
            บริษัทขอสงวนสิทธิในการบอกเลิกข้อตกลงนี้ หรือการยกเลิกการเข้าใช้งานของท่านในเว็บไซต์ของบริษัท รวมทั้งบริการที่เกี่ยวข้อง เมื่อใดก็ได้ โดยไม่ต้องมีการแจ้งล่วงหน้า หากท่านไม่ปฏิบัติตามข้อตกลงการใช้งานเว็บไซต์นี้หรือด้วยเหตุอื่นใดตามที่บริษัทเห็นสมควร<br />
            <br />
            ท่านจะต้องไม่ใช้งานเว็บไซต์ของบริษัทเพื่อวัตถุประสงค์ใดที่ผิดกฎหมายหรือต้องห้ามตามข้อตกลงการใช้งานเว็บไซต์นี้ และต้องไม่ใช้งานเว็บไซต์ของบริษัทในลักษณะใดๆ ที่อาจก่อให้เกิดความเสียหาย ไม่สามารถใช้การได้ หรือเกิดความบกพร่องแก่เว็บไซต์ของบริษัทหรือเครือข่ายที่เชื่อมต่อกับเว็บไซต์ของบริษัท ท่านจะต้องไม่รบกวนการใช้งานเว็บไซต์ของบริษัทของบุคคลอื่นใด และต้องไม่พยายามเข้าสู่เว็บไซต์ของบริษัท บัญชีผู้ใช้ ระบบคอมพิวเตอร์ หรือเครือข่ายที่เชื่อมต่อกับเว็บไซต์ของบริษัท โดยไม่ได้รับอนุญาต ไม่ว่าด้วยวิธีการเจาะฐานข้อมูล (hacking) ทำลายรหัสผ่าน (password mining) หรือวิธีการอื่นใด<br />
            <br />
            ข้อสงวนสิทธิในความรับผิด<br />
            ข้อมูล สินค้า และบริการที่รวมอยู่ในหรือที่มีอยู่บนเว็บไซต์ของบริษัทอาจไม่ถูกต้องหรือมีความผิดพลาดในการพิมพ์ บริษัทขอสงวนสิทธิในการแก้ไขเปลี่ยนแปลงเว็บไซต์ของบริษัทและข้อมูลที่ระบุบนเว็บไซต์โดยไม่ต้องแจ้งให้ทราบล่วงหน้า การตัดสินใจส่วนบุคคล ทางกฎหมาย หรือทางการเงินไม่ควรขึ้นอยู่กับข้อมูลที่ท่านได้รับทางเว็บไซต์ของบริษัท ท่านควรปรึกษาผู้ที่มีความเชี่ยวชาญเพื่อขอคำแนะนำที่เหมาะสมกับสถานการณ์ของท่าน<br />
            <br />
            บริษัทไม่รับรองหรือรับประกันโดยชัดแจ้งหรือโดยปริยาย ไม่ว่ากรณีใดๆ เกี่ยวกับความเหมาะสม ความน่าเชื่อถือ ความพร้อม และเวลาที่เหมาะสม การไม่มีไวรัสหรือสิ่งอื่นใดที่เป็นอันตราย รวมทั้งความถูกต้องของข้อมูล ซอฟท์แวร์ สินค้าและภาพกราฟฟิกที่เกี่ยวข้องที่ปรากฏอยู่บนเว็บไซต์ของบริษัท ไม่ว่าเพื่อวัตถุประสงค์ใดๆ บริษัทจะไม่รับผิดชอบต่อความสูญเสียหรือความเสียหายใดๆ ที่เกิดขึ้น ไม่ว่าโดยตรงหรือโดยอ้อม (รวมทั้งความสูญเสียหรือความเสียหายพิเศษ หรือที่เกิดขึ้นต่อเนื่อง) จากการที่ท่านใช้เว็บไซต์ของบริษัท โดยเฉพาะอย่างยิ่งบริษัทจะไม่รับประกันว่าข้อมูลหรือรายงานทางเศรษฐกิจใดๆ เป็นข้อมูลหรือรายงานที่ถูกต้อง ครบถ้วนหรือเป็นปัจจุบัน<br />
            <br />
            ท่านตกลงว่าบริษัทจะไม่ต้องรับผิดชอบหรือรับผิดต่อการเข้าถึงข้อมูลหรือธุรกรรมของท่านบนเว็บไซต์ของบริษัทโดยไม่ได้รับอนุญาต<br />
            <br />
            กฎหมายที่ใช้บังคับ<br />
            ข้อตกลงการใช้งานเว็บไซต์นี้อยู่ภายใต้บังคับของกฎหมายแห่งราชอาณาจักรไทย และข้อพิพาทใดๆ จะอยู่ภายใต้เขตอำนาจศาลไทย ท่านตกลงว่าความสัมพันธ์ที่มีอยู่ระหว่างท่านกับบริษัทอันเป็นผลมาจากข้อตกลงนี้หรือการใช้เว็บไซต์ของบริษัทของท่านนี้ไม่ถือว่าเป็นกิจการร่วมค้า หุ้นส่วน การจ้างงาน หรือตัวแทนระหว่างท่านและบริษัทแต่อย่างใด<br />
          </DialogContentText>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default StepThree
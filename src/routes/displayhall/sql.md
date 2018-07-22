-- Add comments to the columns 
comment on column TM_MODEL.MODEL_ID
  is '车型主键';
comment on column TM_MODEL.BRAND_CODE
  is '接口字段：品牌代码';
comment on column TM_MODEL.BRAND_NAME
  is '接口字段：品牌名称';
comment on column TM_MODEL.SERIES_CODE
  is '接口字段：车系代码';
comment on column TM_MODEL.SERIES_NAME
  is '接口字段：车系名称';
comment on column TM_MODEL.CAR_CODE
  is '接口字段：车名代码';
comment on column TM_MODEL.CAR_NAME
  is '接口字段：车名名称';
comment on column TM_MODEL.CAR_TYPE_CODE
  is '主数据';
comment on column TM_MODEL.CAR_SHORT_NAME
  is '主数据';
comment on column TM_MODEL.MODEL_CODE_NEW
  is '接口字段：车型代码';
comment on column TM_MODEL.MODEL_NAME
  is '接口字段：车型名称';
comment on column TM_MODEL.PIC_URL
  is '接口字段：车辆图片URL';
comment on column TM_MODEL.DELETE_FLAG
  is '1未删除 -1已删除';
comment on column TM_MODEL.CREATE_DATE
  is '创建时间';
comment on column TM_MODEL.UPDATE_DATE
  is '更新时间';
comment on column TM_MODEL.CREATE_BY
  is '创建人';
comment on column TM_MODEL.UPDATE_BY
  is '更新人';
comment on column TM_MODEL.LAUNCH_DATE
  is '配置上市日期';
comment on column TM_MODEL.FACE_OUT_DATE
  is '配置退市日期';
comment on column TM_MODEL.GUIDE_PRICE
  is '指导价';
comment on column TM_MODEL.LOCAL_PRICE
  is '本店报价';
comment on column TM_MODEL.INCLUDE_LINCESE_PRICE
  is '包牌报价';
comment on column TM_MODEL.INCLUDE_ALL_PRICE
  is '全包报价';
comment on column TM_MODEL.DISPLACEMENT
  is '发动机-排量(L)';
comment on column TM_MODEL.VEHICLE_MODEL
  is '基本参数-类型';
comment on column TM_MODEL.STANDARD_GEAR
  is '基本参数-排放标准';
comment on column TM_MODEL.BODY_STRUCTURE
  is '基本参数-车身型式';
comment on column TM_MODEL.MIIT_FUEL_CONSUM
  is '基本参数-工信部综合油耗(L/100km)';
comment on column TM_MODEL.LENGTH
  is '车身-长度(mm)';
comment on column TM_MODEL.WIDTH
  is '车身-宽度(mm)';
comment on column TM_MODEL.HEIGHT
  is '车身-高度(mm)';
comment on column TM_MODEL.WHEEL_BASE
  is '车身-轴距(mm)';
comment on column TM_MODEL.FW_TRACK
  is '车身-前轮距(mm)';
comment on column TM_MODEL.RW_TRACK
  is '车身-后轮距(mm)';
comment on column TM_MODEL.CURB_WEIGHT
  is '车身-整备质量(kg)';
comment on column TM_MODEL.CARGO_VOLUME
  is '车身-行李厢容积(L)';
comment on column TM_MODEL.ENGINE_MODEL
  is '发动机-发动机型号';
comment on column TM_MODEL.CYLINDER_VOLUME
  is '发动机-气缸容积(mL)';
comment on column TM_MODEL.AIR_INTAKE_FORM
  is '发动机-进气形式';
comment on column TM_MODEL.CYLINDER_ARRAN
  is '发动机-气缸排列型式';
comment on column TM_MODEL.CYLINDER_NUM
  is '发动机-气缸数(个)';
comment on column TM_MODEL.CYLINDER_NUM_PER
  is '发动机-每缸气门数(个)';
comment on column TM_MODEL.REDUCTION_RATIO
  is '发动机-压缩比';
comment on column TM_MODEL.MAX_HORSEPOWER
  is '发动机-最大马力(Ps)';
comment on column TM_MODEL.MAX_POWER
  is '发动机-最大功率(kW)';
comment on column TM_MODEL.MAX_POWER_SPEED
  is '发动机-最大功率转速(rpm)';
comment on column TM_MODEL.MAX_TORQUE
  is '发动机-最大扭矩(Nm)';
comment on column TM_MODEL.MAX_TORQUE_SPEED
  is '发动机-最大扭矩转速(rpm)';
comment on column TM_MODEL.FUEL_TYPE
  is '发动机-燃料类型';
comment on column TM_MODEL.FUEL_LABEL
  is '发动机-燃油标号';
comment on column TM_MODEL.OIL_SUPPLY_WAY
  is '发动机-供油方式';
comment on column TM_MODEL.FUELTANK_VOLUME
  is '发动机-燃油箱容积(L)';
comment on column TM_MODEL.GEAR_NUM
  is '变速箱-挡位个数';
comment on column TM_MODEL.GEARBOX_TYPE
  is '变速箱-变速箱类型';
comment on column TM_MODEL.DRIVE_WAY
  is '底盘转向-驱动方式';
comment on column TM_MODEL.FRONT_SUS_TYPE
  is '底盘转向-前悬架类型';
comment on column TM_MODEL.REAR_SUS_TYPE
  is '底盘转向-后悬架类型';
comment on column TM_MODEL.POWER_TYPE
  is '底盘转向-助力类型';
comment on column TM_MODEL.FA_TYPE
  is '车轮制动-前制动器类型';
comment on column TM_MODEL.RA_TYPE
  is '车轮制动-后制动器类型';
comment on column TM_MODEL.FT_SIZE
  is '车轮制动-前轮胎规格';
comment on column TM_MODEL.RT_SIZE
  is '车轮制动-后轮胎规格';
comment on column TM_MODEL.SPARE_TIRE_SIZE
  is '车轮制动-备胎规格';
comment on column TM_MODEL.WHEEL_HUB_MATERIAL
  is '车轮制动-轮毂材料';
comment on column TM_MODEL.DRIVING_AIRBAG
  is '安全配置-驾驶位安全气囊';
comment on column TM_MODEL.COPILOT_AIRBAG
  is '安全配置-副驾驶位安全气囊';
comment on column TM_MODEL.FS_AIRBAG
  is '安全配置-前排侧安全气囊';
comment on column TM_MODEL.FH_AIRBAG
  is '安全配置-前排头部气囊(气帘)';
comment on column TM_MODEL.KNEE_AIRBAG
  is '安全配置-膝部气囊';
comment on column TM_MODEL.RS_AIRBAG
  is '安全配置-后排侧安全气囊';
comment on column TM_MODEL.RH_AIRBAG
  is '安全配置-后排头部气囊(气帘)';
comment on column TM_MODEL.SA_BELT_PROMPT
  is '安全配置-安全带未系提示';
comment on column TM_MODEL.TIRE_PM_DEVICES
  is '安全配置-胎压监测装置';
comment on column TM_MODEL.ZERO_PRESSURE_LC
  is '安全配置-零压续行(零胎压继续行驶)';
comment on column TM_MODEL.CEN_LOCK
  is '安全配置-中控门锁';
comment on column TM_MODEL.CS_LOCK
  is '安全配置-儿童锁';
comment on column TM_MODEL.TELE_KEY
  is '安全配置-遥控钥匙';
comment on column TM_MODEL.KEYLESS_SS
  is '安全配置-无钥匙启动系统';
comment on column TM_MODEL.ENGINE_ELEC_GUARD
  is '安全配置-发动机电子防盗';
comment on column TM_MODEL.ABS_ANTI_LOCK
  is '行车辅助-ABS防抱死';
comment on column TM_MODEL.BRAKE_FORCE_DISB
  is '行车辅助-制动力分配(EBD/CBC等)';
comment on column TM_MODEL.BRAKE_ASSIST
  is '行车辅助-刹车辅助(EBA/BAS/BA等)';
comment on column TM_MODEL.TRACTION_CONTROL
  is '行车辅助-牵引力控制(ASR/TCS/TRC等)';
comment on column TM_MODEL.STABILITY_CONTROL
  is '行车辅助-车身稳定控制(ESC/ESP/DSC等)';
comment on column TM_MODEL.ASSIST_PARKING
  is '行车辅助-自动驻车/上坡辅助';
comment on column TM_MODEL.SLOPE_SLOW_DESCENT
  is '行车辅助-陡坡缓降';
comment on column TM_MODEL.VAR_SUSP
  is '行车辅助-可变悬架';
comment on column TM_MODEL.AIR_SUSP
  is '行车辅助-空气悬架';
comment on column TM_MODEL.VAR_STEER_RATIO
  is '行车辅助-可变转向比';
comment on column TM_MODEL.AUTO_PI
  is '行车辅助-自动泊车入位';
comment on column TM_MODEL.AUTO_CRUISE
  is '行车辅助-自适应巡航';
comment on column TM_MODEL.CRUISE_CONTROL
  is '行车辅助-定速巡航';
comment on column TM_MODEL.DOUBLING_AUXILIARY
  is '行车辅助-并线辅助;';
comment on column TM_MODEL.INITIATIVE_BRAKE
  is '行车辅助-主动刹车;';
comment on column TM_MODEL.ACTIVE_STEER_SYSTEM
  is '行车辅助-主动转向系统;';
comment on column TM_MODEL.POWER_SUNROOF
  is '外部配置-电动天窗';
comment on column TM_MODEL.PANORAMIC_SUNROOF
  is '外部配置-全景天窗';
comment on column TM_MODEL.MOTION_APPEAR_SUITE
  is '外部配置-运动外观套件';
comment on column TM_MODEL.ELEC_SUCTION_DOOR
  is '外部配置-电动吸合门';
comment on column TM_MODEL.LEATHER_SW
  is '内部配置-真皮方向盘B80:B98';
comment on column TM_MODEL.SW_ADJUST
  is '内部配置-外部配置-B80:B98电动吸合门';
comment on column TM_MODEL.SW_ELEC_ADJUST
  is '内部配置-方向盘电动调节';
comment on column TM_MODEL.MULTI_FUN_SW
  is '内部配置-多功能方向盘';
comment on column TM_MODEL.SW_SHIFT
  is '内部配置-方向盘换挡';
comment on column TM_MODEL.REVER_RADAR
  is '内部配置-倒车雷达;';
comment on column TM_MODEL.REVER_VIDEO_IMAGES
  is '内部配置-倒车视频影像';
comment on column TM_MODEL.DRIVING_SCREEN
  is '内部配置-行车电脑显示屏';
comment on column TM_MODEL.HUD_DIGISPLAY
  is '内部配置-HUD抬头数字显示';
comment on column TM_MODEL.GPS
  is '内部配置-GPS导航系统';
comment on column TM_MODEL.LOC_INTER_SERVICES
  is '内部配置-定位互动服务';
comment on column TM_MODEL.NV_SYSTEM
  is '内部配置-夜视系统;';
comment on column TM_MODEL.CONTROL_LCD_DISPLAY
  is '内部配置-中控液晶屏分屏显示';
comment on column TM_MODEL.PANORAMIC_CAMERA
  is '内部配置-全景摄像头';
comment on column TM_MODEL.CC_SCREEN
  is '内部配置-中控台彩色大屏';
comment on column TM_MODEL.CAT_TV
  is '内部配置-车载电视';
comment on column TM_MODEL.REAR_LCD
  is '内部配置-后排液晶屏';
comment on column TM_MODEL.MULTIMEDIA_SYSTEM
  is '内部配置-多媒体系统';
comment on column TM_MODEL.SPEAKERS_NUM
  is '内部配置-扬声器数量';
comment on column TM_MODEL.SEAT_MATERIA
  is '座椅配置-座椅材质';
comment on column TM_MODEL.MOVEMENT_STYLE_SEATS
  is '座椅配置-运动风格座椅';
comment on column TM_MODEL.SEAT_HEIGHT_ADJUST
  is '座椅配置-座椅高低调节';
comment on column TM_MODEL.LS_ADJUST
  is '座椅配置-腰部支撑调节';
comment on column TM_MODEL.SS_ADJUST
  is '座椅配置-肩部支撑调节';
comment on column TM_MODEL.SR_ANGLE_ADJUST
  is '座椅配置-第二排靠背角度调节';
comment on column TM_MODEL.SR_SEAT_MOVE
  is '座椅配置-第二排座椅移动';
comment on column TM_MODEL.RS_ELEC_ADJUST
  is '座椅配置-后排座椅电动调节';
comment on column TM_MODEL.ELEC_CHAIR_MEMORY
  is '座椅配置-电动座椅记忆';
comment on column TM_MODEL.RS_VENTILATION
  is '座椅配置-排座椅通风';
comment on column TM_MODEL.MASSAGE_SEAT
  is '座椅配置-座椅按摩';
comment on column TM_MODEL.TR_SEATS
  is '座椅配置-第三排座椅';
comment on column TM_MODEL.RS_WAY_DOWN
  is '座椅配置-后排座椅放倒方式';
comment on column TM_MODEL.REAR_CUP_HOLDER
  is '座椅配置-后排杯架';
comment on column TM_MODEL.BC_PHONE
  is '多媒体配置-蓝牙/车载电话';
comment on column TM_MODEL.EXT_AUDIO_INTERFACE
  is '多媒体配置-外接音源接口(AUX/USB/iPod等);';
comment on column TM_MODEL.AUDIO_SUPPORT_MP3
  is '多媒体配置-音频支持MP3;';
comment on column TM_MODEL.HEADLIGHT
  is '灯光配置-大灯';
comment on column TM_MODEL.DR_LAMPS
  is '灯光配置-日间行车灯';
comment on column TM_MODEL.AUTO_HEADLIGHTS
  is '灯光配置-自动头灯';
comment on column TM_MODEL.SH_LAMP
  is '灯光配置-转向头灯';
comment on column TM_MODEL.FRONT_FOG_LAMP
  is '灯光配置-前雾灯';
comment on column TM_MODEL.HH_ADJUST
  is '灯光配置-大灯高度可调';
comment on column TM_MODEL.HC_DEVICE
  is '灯光配置-大灯清洗装置';
comment on column TM_MODEL.ATMO_CAR_LIGHTS
  is '灯光配置-车内氛围灯';
comment on column TM_MODEL.WIN_CLIP_HAND_FUN
  is '玻璃/后视镜-车窗防夹手功能';
comment on column TM_MODEL.HEAT_PROTECT_GLASS
  is '玻璃/后视镜-隔热玻璃';
comment on column TM_MODEL.RM_ELEC_REGULATION
  is '玻璃/后视镜-后视镜电动调节';
comment on column TM_MODEL.RM_HEATING
  is '玻璃/后视镜-后视镜加热';
comment on column TM_MODEL.RM_ANTI_GLARE
  is '玻璃/后视镜-后视镜自动防眩目;';
comment on column TM_MODEL.RM_ELEC_FOLDING
  is '玻璃/后视镜-后视镜电动折叠';
comment on column TM_MODEL.RM_MEMORY
  is '玻璃/后视镜-后视镜记忆';
comment on column TM_MODEL.REAR_WS
  is '玻璃/后视镜-后风挡遮阳帘';
comment on column TM_MODEL.REARSIDE_WS
  is '玻璃/后视镜-后排侧遮阳帘';
comment on column TM_MODEL.VC_MIRROR
  is '玻璃/后视镜-遮阳板化妆镜';
comment on column TM_MODEL.REAR_WIPER
  is '玻璃/后视镜-后雨刷';
comment on column TM_MODEL.SENSING_WIPER
  is '玻璃/后视镜-感应雨刷';
comment on column TM_MODEL.AC_CONTROL_MODE
  is '空调/冰箱-空调控制方式';
comment on column TM_MODEL.REAR_INDE_AC
  is '空调/冰箱-后排独立空调';
comment on column TM_MODEL.REAR_DIFFUSER
  is '空调/冰箱-后座出风口';
comment on column TM_MODEL.TP_ZONE_CONTROL
  is '空调/冰箱-温度分区控制';
comment on column TM_MODEL.CAR_AIR_CONDI
  is '空调/冰箱-车内空气调节/花粉过滤';
comment on column TM_MODEL.CAR_REFRIGERATOR
  is '空调/冰箱-车载冰箱';
comment on column TM_MODEL.PD_ELEC_ADJUST
  is '座椅配置-主驾驶座电动调节';
comment on column TM_MODEL.FS_HEATING
  is '座椅配置-前排座椅加热';
comment on column TM_MODEL.FC_ARMREST
  is '座椅配置-前中央扶手';
comment on column TM_MODEL.FE_WINS
  is '玻璃/后视镜-前电动车窗';
comment on column TM_MODEL.YEAR_MODEL
  is '基本参数-年款';
comment on column TM_MODEL.YEAR_LISTED
  is '基本参数-上市年份';
comment on column TM_MODEL.STATUS
  is '基本参数-状态在售 停售';
comment on column TM_MODEL.DOOR_NUM
  is '基本参数-车门数';
comment on column TM_MODEL.SEATS_NUM
  is '基本参数-座位数';
comment on column TM_MODEL.SD_ELEC_ADJUST
  is '座椅配置-副驾驶座电动调节';
comment on column TM_MODEL.RS_HEATING
  is '座椅配置-后排座椅加热';
comment on column TM_MODEL.RC_ARMREST
  is '座椅配置-后中央扶手';
comment on column TM_MODEL.RE_WINS
  is '玻璃/后视镜-后电动车窗';
comment on column TM_MODEL.VEHICLE_LEVEL
  is '基本参数-级别';
comment on column TM_MODEL.GEARBOX_DESC
  is '变速箱-变速箱描述';
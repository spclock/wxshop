package com.hcsp.api.generate;

import com.hcsp.api.generate.OrderGoods;
import com.hcsp.api.generate.OrderGoodsExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface OrderGoodsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    long countByExample(OrderGoodsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int deleteByExample(OrderGoodsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int deleteByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int insert(OrderGoods record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int insertSelective(OrderGoods record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    List<OrderGoods> selectByExample(OrderGoodsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    OrderGoods selectByPrimaryKey(Long id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int updateByExampleSelective(@Param("record") OrderGoods record, @Param("example") OrderGoodsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int updateByExample(@Param("record") OrderGoods record, @Param("example") OrderGoodsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int updateByPrimaryKeySelective(OrderGoods record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table ORDER_GOODS
     *
     * @mbg.generated Sun Apr 26 20:44:57 CST 2020
     */
    int updateByPrimaryKey(OrderGoods record);
}